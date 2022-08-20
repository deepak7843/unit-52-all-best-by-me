// export const Pagination = ({ total, selected, onPageChange }) => {
//   return <div className="pageContainer"></div>;
// };

/////////******************   self ***********************************************************************************************************************************************************************************************

// export const Pagination = ({ total, selected, onPageChange }) => {
//   var totalarr = new Array(Length).fill(1)

//   return <div className="pageContainer">
//     {/* {totalarr} */}
//     <button>{`<`} </button> <span></span>
//     <button>1</button> <span></span>

//     <button>2</button>  <span></span>

//     <button>3</button> <span></span>

//     <button>4</button>  <span></span>
//     <button>5</button>  <span></span>

//     <button> {`>`} </button>

//   </div>;
// };

/////////////   self ************************************************************************************************************************************************************************************
import classnames from "classnames";

export const Pagination = ({ total, selected, onPageChange }) => {
  const firstPageIndex = 1;
  const lastPageIndex = total;

  return (
    <div className="pageContainer">
      <ul
        className={classnames("pagination-container", {
          [className]: className,
        })}
      >
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === 1,
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              className={classnames("pagination-item", {
                selected: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames("pagination-item", {
            disabled: currentPage === lastPage,
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
      </ul>
      {/* dsd */}
    </div>
  );
};
