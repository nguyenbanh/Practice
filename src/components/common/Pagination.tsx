import { Paginator } from "primereact/paginator";

const Pagination = ({
  page,
  perPage,
  totalRecords,
  onPageChange,
}: PaginationProps) => {
  const currentItems =
    perPage * (page + 1) < totalRecords ? perPage * (page + 1) : totalRecords;

  return (
    <div className="flex align-items-center justify-content-center">
      <span>
        Showing {page * perPage + 1} to {currentItems} of {totalRecords} data
      </span>
      <Paginator
        first={page * perPage}
        rows={perPage}
        totalRecords={totalRecords}
        rowsPerPageOptions={[5, 10, 15]}
        onPageChange={onPageChange}
      />
    </div>
  );
};

type PaginationProps = {
  page: number;
  perPage: number;
  totalRecords: number;
  onPageChange?: (e: any) => void;
};

export default Pagination;
