import Category from "../constants/category";
import Question from "../interfaces/question";
// Function to generate a random question
// Sample product management interview questions
const productManagementQuestions: string[] = [
  "How do you prioritize features on a product roadmap?",
  "Can you describe a time when you successfully launched a product?",
  "How do you gather customer feedback for product improvements?",
  "What metrics do you use to measure the success of a product?",
  "How do you handle competing priorities from different stakeholders?",
  "Can you explain your approach to user research?",
  "How do you assess market trends and competitor products?",
  "Can you walk us through your process for defining product requirements?",
  "What strategies do you use to ensure product adoption and engagement?",
  "How do you handle product launches in a fast-paced environment?",
];

function generateRandomQuestion() {
  // Generate a random question title
  const title =
    productManagementQuestions[
      Math.floor(Math.random() * productManagementQuestions.length)
    ];
  // Generate random categories for the question
  const randomCategories: Category[] = [];
  const minNumCategories = 1; // Ensure at least one category
  const maxNumCategories = 2; // Maximum possible number of categories excluding "All"
  const numCategories =
    Math.floor(Math.random() * (maxNumCategories - minNumCategories + 1)) +
    minNumCategories;

  const allCategoryValues = Object.values(Category).filter(
    (category) => category !== Category.All
  ); // Filter out "All" category
  while (randomCategories.length < numCategories) {
    const randomCategoryIndex = Math.floor(
      Math.random() * allCategoryValues.length
    );
    const randomCategory = allCategoryValues[randomCategoryIndex];
    if (!randomCategories.includes(randomCategory)) {
      randomCategories.push(randomCategory);
    }
  }

  // Return the question object
  return {
    title,
    categories: randomCategories,
  };
}

// Function to generate random questions based on a specified length
export default function generateRandomQuestions(length: number): Question[] {
  const questions = [];
  for (let i = 0; i < length; i++) {
    const question = generateRandomQuestion();
    questions.push(question);
  }
  return questions;
}
