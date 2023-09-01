const FIRST_PAGE = 1;

const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setcurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setcurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setcurrentPage(lastPage);
  const handlePreviusPage = () => {
    setcurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirsPage = () => setcurrentPage(FIRST_PAGE);

  return (
    <ul className="flex justify-center gap-4 p-4 items-center">
      {currentPage >= 2 && <li onClick={handleFirsPage}>{"<<"}</li>}
      {currentPage >= 2 && <li onClick={handlePreviusPage}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li className={`flex justify-center items-center p-4 h-[35px] aspect-square ${currentPage === page ? "text-white bg-red-600 " : ""}`} key={page} onClick={() => setcurrentPage(page)}>
          {page}
        </li>
      ))}
      {currentPage <= 64 && <li onClick={handleNextPage}>{">"}</li>}
      {currentPage <= 64 && <li onClick={handleLastPage}>{">>"}</li>}
    </ul>
  );
};
export default Pagination;
