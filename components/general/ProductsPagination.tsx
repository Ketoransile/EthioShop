// "use client";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
// } from "@/components/ui/pagination";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";
// import { Button } from "../ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const LIMIT = 10;

// const ProductsPagination = ({
//   currentPage,
//   totalPages,
// }: {
//   currentPage: number;
//   totalPages: number;
// }) => {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   const updateURL = useDebouncedCallback((page: number) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("page", page.toString());
//     router.replace(`${pathname}?${params.toString()}`);
//   }, 300);

//   const handlePageChange = (page: number) => {
//     if (page < 1 || page > totalPages) return;
//     updateURL(page);
//   };

//   const getPageNumbers = () => {
//     const maxVisiblePages = 5;
//     let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
//     let end = Math.min(totalPages, start + maxVisiblePages - 1);

//     if (end - start < maxVisiblePages - 1) {
//       start = Math.max(1, end - maxVisiblePages + 1);
//     }

//     return Array.from({ length: end - start + 1 }, (_, i) => start + i);
//   };

//   return (
//     <Pagination className="py-10">
//       <PaginationContent>
//         <PaginationItem>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           >
//             <ChevronLeft className="mr-2 w-4 h-4" />
//             Previous
//           </Button>
//         </PaginationItem>

//         {getPageNumbers().map((page) => (
//           <PaginationItem key={page}>
//             <PaginationLink
//               href="#"
//               isActive={page === currentPage}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handlePageChange(page);
//               }}
//             >
//               {page}
//             </PaginationLink>
//           </PaginationItem>
//         ))}

//         <PaginationItem>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           >
//             Next
//             <ChevronRight className="ml-2 w-4 h-4" />
//           </Button>
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   );
// };

// export default ProductsPagination;
"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  totalPages: number;
};

const ProductsPagination = ({ currentPage, totalPages }: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateURL = useDebouncedCallback((page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    updateURL(page);
  };

  const getPageNumbers = () => {
    const maxVisiblePages = 5;
    let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start < maxVisiblePages - 1) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <Pagination className="py-10 flex justify-center">
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="mr-2 w-4 h-4" />
            Previous
          </Button>
        </PaginationItem>

        {getPageNumbers().map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(page);
              }}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ProductsPagination;
