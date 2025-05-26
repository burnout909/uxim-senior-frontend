import { useState, useEffect } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  groupSize?: number; // optional, default = 9
};

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  groupSize = 9,
}: PaginationProps) {
  const [pageGroup, setPageGroup] = useState(0);

  // 페이지 그룹 자동 설정
  useEffect(() => {
    const newGroup = Math.floor((currentPage - 1) / groupSize);
    setPageGroup(newGroup);
  }, [currentPage, groupSize]);

  const startPage = pageGroup * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const hasPrevGroup = pageGroup > 0;
  const hasNextGroup = endPage < totalPages;

  return (
    <div className="flex justify-center gap-1 mt-4 flex-wrap">
      {/* 이전 그룹 */}
      {hasPrevGroup && (
        <button
          onClick={() => onPageChange(startPage - 1)}
          className="px-3 py-1 rounded border text-sm hover:bg-blue-50"
        >
          &lt;
        </button>
      )}

      {/* 현재 그룹 페이지들 */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border text-sm ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-blue-50"
          }`}
        >
          {page}
        </button>
      ))}

      {/* 다음 그룹 */}
      {hasNextGroup && (
        <button
          onClick={() => onPageChange(endPage + 1)}
          className="px-3 py-1 rounded border text-sm hover:bg-blue-50"
        >
          &gt;
        </button>
      )}
    </div>
  );
}

export default Pagination;
