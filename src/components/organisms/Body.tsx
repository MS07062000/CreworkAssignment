import Category from "../../constants/category";
import Question from "../../interfaces/question";
import Categories from "../molecules/Categories";
import QuestionComponent from "../molecules/Question";
import Pagination from "../molecules/Pagination";
import generateRandomQuestions from "../../helper/generateRandomQuestions";
import { useState, useMemo, useEffect } from "react";
const itemsPerPage = 10; // Number of items to display per page

const Body: React.FC = () => {
  const questions: Question[] = useMemo(() => generateRandomQuestions(100), []);
  const [filterCategory, setFilterCategory] = useState<Category[]>([
    Category.All,
  ]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const changeCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  const filteredQuestions = useMemo(
    () =>
      questions.filter((question) => {
        if (filterCategory.includes(Category.All)) {
          return true; // Return true for all questions if Category.All is selected
        } else {
          // Return true if any category in the question's categories array matches any category in filterCategory
          return question.categories.some((category) =>
            filterCategory.includes(category)
          );
        }
      }),
    [questions, filterCategory]
  );

  const maxPages = Math.ceil(filteredQuestions.length / 10);

  // Calculate start and end indices for the slice
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage,
    filteredQuestions.length
  );

  // Slice the questions array based on the calculated indices
  const displayedQuestions = filteredQuestions.slice(startIndex, endIndex);

  const onFilterClick = (category: Category) => {
    if (category === Category.All) {
      setFilterCategory([Category.All]);
    } else if (!filterCategory.includes(category)) {
      if (filterCategory.includes(Category.All)) {
        setFilterCategory([category]);
      } else {
        setFilterCategory([...filterCategory, category]);
      }
    } else {
      setFilterCategory(filterCategory.filter((item) => item !== category));
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory]);

  return (
    <div className="bg-[#1B1919] flex-col justify-evenly items-center flex px-4 pb-4 lg:px-0">
      <div className="flex-col justify-start items-start gap-4 inline-flex flex-wrap">
        <p className="text-4xl font-bold font-['Red Hat Display'] leading-10 bg-gradient-to-b from-white to-orange-400 inline-block text-transparent bg-clip-text">
          Product Management Interview Questions
        </p>
        <p className="text-white text-base font-normal font-['Poppins'] leading-tight">
          Browse 1000+ questions from top tech companies
        </p>
        <Categories
          filterCategory={filterCategory}
          onFilterClick={onFilterClick}
        />
        <QuestionComponent questions={displayedQuestions} />
        <Pagination
          startIndex={startIndex}
          endIndex={endIndex}
          maxPages={maxPages}
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
          totalQuestions={filteredQuestions.length}
        />
      </div>
    </div>
  );
};

export default Body;
