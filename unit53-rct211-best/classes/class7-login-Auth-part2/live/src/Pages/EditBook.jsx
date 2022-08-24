
import React from 'react'

const EditBook = () => {
  return (
    <div>EditBook</div>
  )
}

export default EditBook


/////////*****************************************************************************************************************************************************************************************************************



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getBooks, updateBookRecord } from "../Redux/AppReducer/action";

// const EditBook = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const books = useSelector((state) => state.AppReducer.books);

//   // const [currentBook, setCurrentBook] = useState({});

//   const [bookName, setBookName] = useState("");
//   const [release_year, setRelease_year] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (bookName && release_year) {
//       const payload = {
//         book_name: bookName,
//         release_year: release_year,
//       };
//       dispatch(updateBookRecord(id, payload)).then(() => {
//         dispatch(getBooks());
//       });
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       // console.log(id);
//       const temp = books?.find((book) => book.id === Number(id));
//       // console.log("temp--", temp);
//       // temp && setCurrentBook(temp); /////// 1-9-17
//       // setCurrentBook(temp);

//       if (temp) {
//         setBookName(temp.book_name);
//         setRelease_year(temp.release_year);
//       }
//     }
//   }, [books, id]);

//   // console.log("currentBook--", currentBook);
//   console.log(bookName, release_year);

//   return (
//     <div>
//       <h1>EditBook</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label> EditBook Name </label>
//           <input
//             value={bookName}
//             // placeholder={bookName}
//             onChange={(e) => setBookName(e.target.value)}
//           />
//         </div>
//         <div>
//           <label> Edit release_year </label>
//           <input
//             value={release_year}
//             onChange={(e) => setRelease_year(e.target.value)}
//           />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default EditBook;
