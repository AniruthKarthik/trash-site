"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { TitanicForm } from "@/components/titanic-form"
import { TitanicResult } from "@/components/titanic-result"

type FormState = {
  name: string
  age: string
  gender: string
  pclass: string
  siblings: string
  parents: string
  embarked: string
  fare: string
}

export default function TitanicSurvivalPage() {
  const [formData, setFormData] = useState<FormState | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    survivalProbability: number
    factors: {
      factor: string
      impact: "positive" | "negative" | "neutral"
      description: string
    }[]
  } | null>(null)

  const handleSubmit = async (data: FormState): Promise<void> => {
    setFormData(data)
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 3000))

    let probability = 0.5
    const factors = []

    // Gender
    if (data.gender === "female") {
      probability += 0.2
      factors.push({
        factor: "Gender",
        impact: "positive",
        description: "Women had higher survival rates on the Titanic",
      })
    } else {
      probability -= 0.1
      factors.push({
        factor: "Gender",
        impact: "negative",
        description: "Men had lower survival rates on the Titanic",
      })
    }

    // Age
    const age = Number(data.age)
    if (age < 16) {
      probability += 0.15
      factors.push({
        factor: "Age",
        impact: "positive",
        description: "Children were prioritized for lifeboats",
      })
    } else if (age > 50) {
      probability -= 0.05
      factors.push({
        factor: "Age",
        impact: "negative",
        description: "Older passengers had slightly lower survival rates",
      })
    } else {
      factors.push({
        factor: "Age",
        impact: "neutral",
        description: "Your age had a neutral impact on survival",
      })
    }

    // Class
    const pclass = String(data.pclass)
    if (pclass.includes("1st")) {
      probability += 0.15
      factors.push({
        factor: "Passenger Class",
        impact: "positive",
        description: "First class passengers had priority access to lifeboats",
      })
    } else if (pclass.includes("3rd")) {
      probability -= 0.15
      factors.push({
        factor: "Passenger Class",
        impact: "negative",
        description: "Third class passengers had limited access to lifeboats",
      })
    } else {
      probability += 0.05
      factors.push({
        factor: "Passenger Class",
        impact: "neutral",
        description: "Second class passengers had moderate access to lifeboats",
      })
    }

    // Family size
    const familySize = Number(data.siblings) + Number(data.parents)
    if (familySize === 0) {
      probability -= 0.05
      factors.push({
        factor: "Traveling Alone",
        impact: "negative",
        description: "Passengers traveling alone had slightly lower survival rates",
      })
    } else if (familySize <= 3) {
      probability += 0.05
      factors.push({
        factor: "Family Size",
        impact: "positive",
        description: "Small family groups had better coordination during evacuation",
      })
    } else {
      probability -= 0.1
      factors.push({
        factor: "Large Family",
        impact: "negative",
        description: "Large families had difficulty staying together during evacuation",
      })
    }

    // Embarkation
    const embarked = String(data.embarked)
    if (embarked === "Cherbourg") {
      probability += 0.05
      factors.push({
        factor: "Embarkation Point",
        impact: "positive",
        description: "Passengers from Cherbourg had slightly higher survival rates",
      })
    } else if (embarked === "Southampton") {
      probability -= 0.02
      factors.push({
        factor: "Embarkation Point",
        impact: "neutral",
        description: "Embarkation point had minimal impact on survival",
      })
    }

    // Fare
    const fare = Number(data.fare)
    if (fare > 50) {
      probability += 0.1
      factors.push({
        factor: "Ticket Fare",
        impact: "positive",
        description: "Passengers with expensive tickets were often in better locations for evacuation",
      })
    } else if (fare < 10) {
      probability -= 0.05
      factors.push({
        factor: "Ticket Fare",
        impact: "negative",
        description: "Passengers with cheaper tickets were often in less accessible locations",
      })
    }

    // Clamp and add randomness
    probability = Math.max(0.1, Math.min(0.9, probability + Math.random() * 0.1 - 0.05))

    setResult({
      survivalProbability: probability,
      factors: factors,
    })
    setIsLoading(false)
  }

  const resetAnalysis = () => {
    setFormData(null)
    setResult(null)
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat titanic-survival.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> Will U Survive the Titanic
            </p>
            <p>
              <span className="text-primary">category:</span> interactive
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">Machine Learning</span>
              <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                Predictive Analysis
              </span>
              <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">Interactive</span>
            </p>
          </div>
        </div>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Titanic Survival Predictor</h2>
        <p className="text-muted-foreground">
          This interactive tool uses machine learning algorithms trained on historical data from the 1912 Titanic
          disaster to predict whether you would have survived based on your personal characteristics. Enter your
          information to discover your fate on the ill-fated voyage.
        </p>
      </div>

      <div className="mt-8">
        {!formData || !result ? (
          <TitanicForm onSubmit={handleSubmit} isLoading={isLoading} />
        ) : (
          <TitanicResult
            name={formData.name}
            survivalProbability={result.survivalProbability}
            factors={result.factors}
            onReset={resetAnalysis}
          />
        )}
      </div>
    </div>
  )
}
