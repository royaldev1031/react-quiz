import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

export default function Options() {
  const { questions, index, dispatch, answer } = useQuiz()
  const question = questions[index]

  const hasAnswer = answer !== null

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswer
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          }`}
          key={option}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
