"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

type TitanicResultProps = {
  name: string
  survivalProbability: number
  factors: {
    factor: string
    impact: "positive" | "negative" | "neutral"
    description: string
  }[]
  onReset: () => void
}

export function TitanicResult({ name, survivalProbability, factors, onReset }: TitanicResultProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [showButton, setShowButton] = useState(false)

  const survived = survivalProbability > 0.5

  const resultText = [
    `> Analyzing survival probability for ${name}...`,
    `> Running machine learning model...`,
    `> Processing passenger characteristics...`,
    `> Comparing with historical data...`,
    `> Analysis complete.`,
    ``,
    survived
      ? `Survival Probability: ${(survivalProbability * 100).toFixed(1)}%`
      : `Survival Probability: ${(survivalProbability * 100).toFixed(1)}%`,
    ``,
    survived
      ? `${name}, you would likely SURVIVE the Titanic disaster.`
      : `${name}, you would likely NOT SURVIVE the Titanic disaster.`,
    ``,
    `Key factors affecting your survival:`,
  ]

  // Add factor lines
  factors.forEach((factor) => {
    const impactSymbol = factor.impact === "positive" ? "+" : factor.impact === "negative" ? "-" : "="
    resultText.push(`${impactSymbol} ${factor.factor}: ${factor.description}`)
  })

  // Add final line
  resultText.push(``)
  resultText.push(`This analysis is based on historical data from the 1912 Titanic disaster.`)

  useEffect(() => {
    if (currentLine < resultText.length) {
      const timer = setTimeout(
        () => {
          setDisplayedText((prev) => prev + resultText[currentLine] + "\n")
          setCurrentLine(currentLine + 1)
        },
        currentLine < 5 ? 500 : 1000,
      )

      return () => clearTimeout(timer)
    } else if (!showButton) {
      const timer = setTimeout(() => {
        setShowButton(true)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [currentLine, showButton])

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">titanic_analysis_results.sh</div>
      </div>
      <div className="terminal-content">
        <pre className="font-mono whitespace-pre-wrap">
          {displayedText}
          {currentLine < resultText.length && <span className="terminal-cursor"></span>}
        </pre>

        {showButton && (
          <div className="mt-6">
            <Button onClick={onReset} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Run New Analysis
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
