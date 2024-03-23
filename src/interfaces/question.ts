import Category from "../constants/category";

export default interface Question {
  title: string;
  categories: Category[];
}
