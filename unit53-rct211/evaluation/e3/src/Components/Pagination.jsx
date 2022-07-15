export const Pagination = ({ total, selected, onPageChange }) => {
  var totalarr = new Array(total).fill(1)


  return <div className="pageContainer">
    {/* {totalarr} */}
    <button>{`<`} </button> <span></span>
    <button>1</button> <span></span>
    
    <button>2</button>  <span></span>
   
    <button>3</button> <span></span>
    
    <button>4</button>  <span></span>
    <button>5</button>  <span></span>
   
    <button> {`>`} </button>

  </div>;
};
