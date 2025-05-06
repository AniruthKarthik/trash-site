"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type FormField = {
  id: string
  label: string
  type: string
  options?: string[]
  placeholder?: string
}

type FormState = {
  [key: string]: string | number
}

type TitanicFormProps = {
  onSubmit: (data: FormState) => void
  isLoading: boolean
}

export function TitanicForm({ onSubmit, isLoading }: TitanicFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormState>({})
  const [typingIndex, setTypingIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const formFields: FormField[] = [
    { id: "name", label: "What is your name?", type: "text", placeholder: "Enter your name" },
    { id: "age", label: "How old are you?", type: "number", placeholder: "Enter your age" },
    {
      id: "gender",
      label: "What is your gender?",
      type: "select",
      options: ["male", "female"],
    },
    {
      id: "pclass",
      label: "Which passenger class would you travel in?",
      type: "select",
      options: ["1st (Upper)", "2nd (Middle)", "3rd (Lower)"],
    },
    {
      id: "fare",
      label: "How much would you pay for your ticket (in £)?",
      type: "number",
      placeholder: "Enter fare amount",
    },
    {
      id: "siblings",
      label: "How many siblings/spouses would accompany you?",
      type: "number",
      placeholder: "Enter number",
    },
    {
      id: "parents",
      label: "How many parents/children would accompany you?",
      type: "number",
      placeholder: "Enter number",
    },
    {
      id: "embarked",
      label: "Where would you embark from?",
      type: "select",
      options: ["Cherbourg", "Queenstown", "Southampton"],
    },
    { id: "address", label: "What is your address?", type: "text", placeholder: "Enter your address" },
  ]

  const currentField = formFields[currentStep]

  const handleInputChange = (value: string) => {
    setFormData({
      ...formData,
      [currentField.id]: currentField.type === "number" ? Number(value) : value,
    })
  }

  const handleNext = () => {
    if (currentStep < formFields.length - 1) {
      setTypingIndex(0)
      setCurrentStep(currentStep + 1)
    } else {
      onSubmit(formData)
    }
  }

  const isCurrentFieldValid = () => {
    const value = formData[currentField.id]
    if (value === undefined || value === "") return false
    if (currentField.type === "number" && isNaN(Number(value))) return false
    return true
  }

  // Simulate typing effect for the question
  const displayedQuestion = currentField.label.substring(0, typingIndex)

  // Increment typing index for animation
  useState(() => {
    if (typingIndex < currentField.label.length) {
      const timer = setTimeout(() => {
        setTypingIndex(typingIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  })

  // Blinking cursor effect
  useState(() => {
    const timer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(timer)
  })

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">titanic_survival_predictor.sh</div>
      </div>
      <div className="terminal-content space-y-4">
        <div className="mb-4">
          <p className="mb-2">
            <span className="text-primary">$</span> ./analyze_survival.sh
          </p>
          <p className="mb-4 text-muted-foreground text-sm">
            Running Titanic survival analysis... Please provide the following information:
          </p>
          <p className="mb-2">
            <span className="text-primary">
              [{currentStep + 1}/{formFields.length}]
            </span>{" "}
            {displayedQuestion}
            {typingIndex === currentField.label.length && showCursor && <span className="terminal-cursor"></span>}
          </p>
        </div>

        {typingIndex === currentField.label.length && (
          <div className="space-y-4">
            {currentField.type === "select" ? (
              <div className="space-y-2">
                {currentField.options?.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name={currentField.id}
                      value={option}
                      checked={formData[currentField.id] === option}
                      onChange={() => handleInputChange(option)}
                      className="mr-2 bg-transparent border-primary"
                    />
                    <label htmlFor={`option-${index}`} className="text-white">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ) : (
              <input
                type={currentField.type}
                id={currentField.id}
                value={(formData[currentField.id] as string) || ""}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentField.placeholder}
                className="w-full bg-transparent border border-primary/30 p-2 text-white focus:outline-none focus:border-primary"
              />
            )}

            <div className="flex justify-between">
              <Button
                type="button"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                Back
              </Button>
              <Button
                type="button"
                onClick={handleNext}
                disabled={!isCurrentFieldValid()}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {currentStep === formFields.length - 1 ? "Analyze Survival" : "Next"}
              </Button>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="mt-4">
            <p className="text-primary">
              Running survival analysis...
              <span className="terminal-cursor"></span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
