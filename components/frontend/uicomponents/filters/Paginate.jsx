"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

const Paginate = ({ totalPages, isSearch, productCount }) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const min = searchParams.get("min") || 0;
  const max = searchParams.get("max") || "";
  const sort = searchParams.get("sort") || "asc";
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const actualPages = Math.ceil(productCount / 5);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={
                isSearch
                  ? currentPage === 1
                    ? `?${new URLSearchParams({
                        search,
                        page: 1,
                        sort,
                        min,
                        max,
                      })}`
                    : `?${new URLSearchParams({
                        search,
                        page: parseInt(currentPage) - 1,
                        sort,
                        min,
                        max,
                      })}`
                  : currentPage === 1
                  ? `?${new URLSearchParams({ page: 1, sort, min, max })}`
                  : `?${new URLSearchParams({
                      page: parseInt(currentPage) - 1,
                      sort,
                      min,
                      max,
                    })}`
              }
            />
          </PaginationItem>
          {totalPages <= actualPages ? (
            Array.from({ length: actualPages }, (_, index) => {
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={index + 1 === currentPage}
                    href={
                      isSearch
                        ? `?${new URLSearchParams({ search, page: index + 1 })}`
                        : `?${new URLSearchParams({ page: index + 1 })}`
                    }
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })
          ) : (
            <>
              {Array.from({ length: 2 }, (_, index) => {
                return (
                  <PaginationItem key={index}>
                    <PaginationLink href="#">{index + 1}</PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <PaginationNext
              href={
                isSearch
                  ? `${
                      currentPage === totalPages
                        ? `?${new URLSearchParams({
                            search,
                            page: totalPages,
                            sort,
                            min,
                            max,
                          })}`
                        : `?${new URLSearchParams({
                            search,
                            page: parseInt(currentPage) + 1,

                            sort,
                            min,
                            max,
                          })}`
                    }`
                  : currentPage === totalPages
                  ? `?${new URLSearchParams({
                      page: totalPages,
                      sort,
                      min,
                      max,
                    })}`
                  : `?${new URLSearchParams({
                      page: parseInt(currentPage) + 1,

                      sort,
                      min,
                      max,
                    })}`
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginate;
