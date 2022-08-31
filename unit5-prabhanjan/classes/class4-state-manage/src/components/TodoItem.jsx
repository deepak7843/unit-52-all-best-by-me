export const TodoItem = ({ todo, handleStatus }) => {
    return (
        <div>

           {/* {todo} */}


           {/* <button>  delete </button>   */}

            {/* <div>  id: {todo.id} </div> */}

            {todo.title} ---- {todo.status ? "Done" : "Not Done"}   
             {/* // 1--53--45 */}

             {/* <button>  Toggle </button>   */}


            <button
                onClick={() => handleStatus(todo.id)} >  Toggle   
                {/* 2--0--49 */}

            </button>

        </div>
    )
}