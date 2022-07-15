import React from 'react'

const BookCard = ( {bookData} ) => {
    // console.log("bookData--", bookData);

  return (
    <div>
         <div>
            <img src="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9va3N8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
            
            width= "100%" 
            alt="cover-page" />
            <div> {bookData.book_name}  </div>
            <div>  {bookData.release_year} </div>
            <div>  {bookData.category} </div>
         </div>
    </div>
  )
}

export default BookCard