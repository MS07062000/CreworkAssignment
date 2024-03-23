import React from "react";
import Question from "../../interfaces/question";
import Category from "../../constants/category";

interface QuestionProps {
  questions: Question[];
}

const QuestionComponent: React.FC<QuestionProps> = ({ questions }) => {
  return (
    <>
      {questions.map((question: Question, index: number) => (
        <div
          key={index}
          className="flex-col justify-start items-start gap-2 flex"
        >
          <div className="text-white text-lg font-medium font-['Poppins'] leading-normal">
            {question.title}
          </div>
          <div className="justify-start items-start gap-4 flex">
            {question.categories.map(
              (category: Category, categoryIndex: number) => (
                <div
                  key={categoryIndex + category}
                  className="text-stone-300 text-sm font-normal font-Inter leading-tight"
                >
                  {category}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default QuestionComponent;
