interface PaginationProps {
  startIndex: number;
  endIndex: number;
  maxPages: number;
  currentPage: number;
  changeCurrentPage: (page: number) => void;
  totalQuestions: number;
}
const Pagination: React.FC<PaginationProps> = ({
  startIndex,
  endIndex,
  maxPages,
  currentPage,
  changeCurrentPage,
  totalQuestions,
}) => (
  <div className="justify-end items-center mb-5 gap-2 inline-flex lg:self-end">
    <p className="hidden lg:inline-block text-white text-base font-normal font-['Poppins'] leading-tight">
      Showing {startIndex + 1}-{endIndex} of {totalQuestions}
    </p>
    {currentPage !== 1 && maxPages !== 1 && (
      <div
        className="px-4 py-2 bg-orange-400 rounded border border-orange-400 text-stone-900 text-base font-medium font-['Poppins'] leading-tight"
        onClick={() => {
          changeCurrentPage(currentPage - 1);
        }}
      >
        Prev
      </div>
    )}
    {currentPage !== 1 && (
      <p
        className="px-4 py-2 bg-stone-900 rounded border gap-2.5 text-base font-medium font-['Poppins'] leading-tight border-white text-white"
        onClick={() => {
          changeCurrentPage(1);
        }}
      >
        1
      </p>
    )}
    <p className="px-4 py-2 bg-stone-900 rounded border gap-2.5 text-base font-medium font-['Poppins'] leading-tight border-orange-400 text-orange-400">
      {currentPage}
    </p>
    {currentPage + 1 < maxPages && (
      <div className="text-white text-base font-medium font-['Poppins'] leading-tight">
        ....
      </div>
    )}
    {currentPage !== maxPages && (
      <p
        className="px-4 py-2 bg-stone-900 rounded border gap-2.5 text-base font-medium font-['Poppins'] leading-tight border-white text-white"
        onClick={() => {
          changeCurrentPage(maxPages);
        }}
      >
        {maxPages}
      </p>
    )}
    {currentPage !== maxPages && (
      <div
        className="px-4 py-2 bg-orange-400 rounded border border-orange-400 text-stone-900 text-base font-medium font-['Poppins'] leading-tight"
        onClick={() => {
          changeCurrentPage(currentPage + 1);
        }}
      >
        Next
      </div>
    )}
  </div>
);

export default Pagination;
