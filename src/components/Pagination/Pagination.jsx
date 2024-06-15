import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.css";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakLinkClassName={styles.breakMe}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={onPageChange}
        containerClassName={styles.pagination}
        subContainerClassName={`${styles.pages} ${styles.pagination}`}
        activeClassName={styles.active}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        nextClassName={styles.pageItem}
        previousLinkClassName={styles.previousItem}
        nextLinkClassName={styles.nextItem}
        disabledClassName={styles.disabled}
        pageClassName={styles.pageItem}
        forcePage={0}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
