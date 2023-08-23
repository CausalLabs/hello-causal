"use client";

import { useState } from "react";
import { QuestionType, Questions } from "./data";
import { queryBuilder } from "../utils/causal";
import { useFeature } from "../utils/causal.client";

export default function Quiz() {
  const [quizComplete, setQuizComplete] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setQuizComplete(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8 pb-10">
        <h2 className="sr-only">Find the perfect Pen</h2>
        <div className="py-24 text-center border-b border-gray-200">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Find the perfect pen
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
            Take our quiz to find the perfect pen for you.
          </p>
        </div>
        <div>
          {!quizComplete ? (
            <ActiveQuiz
              setQuizComplete={setQuizComplete}
              currentQuestionIndex={currentQuestionIndex}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
            />
          ) : (
            <InactiveQuiz handleResetQuiz={handleResetQuiz} />
          )}
        </div>
      </div>
    </div>
  );
}

function ActiveQuiz(props: {
  setQuizComplete: (value: boolean) => void;
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const setQuizComplete = props.setQuizComplete;
  const currentQuestionIndex = props.currentQuestionIndex;
  const setCurrentQuestionIndex = props.setCurrentQuestionIndex;

  const quiz = useFeature(queryBuilder().getStore_Quiz());
  if (quiz == "OFF") return <></>;

  const selectedQuestions = quiz?.questionList;

  const filteredQuestions: QuestionType[] = Questions.filter(
    (question: QuestionType) => selectedQuestions?.includes(question.id)
  );

  //This should be an array provided by a Causal feature
  const questionOrder = quiz?.questionOrder;

  const orderedQuestions = questionOrder
    ? questionOrder.map((questionId: number) =>
        filteredQuestions.find(
          (question: QuestionType) => question.id === questionId
        )
      )
    : [];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < orderedQuestions?.length - 1) {
      const question = orderedQuestions[currentQuestionIndex];
      if (!question) return;
      quiz?.signalanswerQuestion({
        questionId: question.id,
        answer: selectedAnswer,
      });
      setSelectedAnswer("");
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      quiz?.signalCompleteQuiz();
      setQuizComplete(true);
    }
  };
  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 ">
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {orderedQuestions[currentQuestionIndex]?.question}
          </h2>
        </div>

        <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
          <div className="px-4 py-6 sm:p-8">
            <div className="max-w-2xl space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Answer Options
                </legend>
                <div className="mt-6 space-y-6">
                  {orderedQuestions[currentQuestionIndex]?.answers.map(
                    (answer: string, index: number) => {
                      return (
                        <div key={index} className="flex items-center gap-x-3">
                          <input
                            id={`answer-${index}`}
                            name="answer"
                            type="radio"
                            value={answer}
                            checked={selectedAnswer === answer}
                            onChange={handleAnswerChange}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor={`answer-${index}`}
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            {answer}
                          </label>
                        </div>
                      );
                    }
                  )}
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Back
            </button>
            <button
              onClick={handleNextQuestion}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InactiveQuiz(props: { handleResetQuiz: () => void }) {
  const handleResetQuiz = props.handleResetQuiz;
  return (
    <div className="text-base text-gray-700">
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
        Thank you for completing the quiz!
      </h2>
      <p className="mt-6 mb-8">
        Check your email for great pen recommendations
      </p>
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleResetQuiz}
      >
        Start Again
      </button>
    </div>
  );
}
