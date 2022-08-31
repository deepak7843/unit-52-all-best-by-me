import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(100);
  // const [count, setCount] = useState(8);

  // setInterval ( () => {   ////1--10--20
  //      setCount(count-1)
  // }, 1000  )

  //   useEffect( () => {
  //     setInterval ( () => {
  //         setCount(count-1)
  //    }, 1000  )
  // }, [] )

  useEffect(() => {
    let id = setInterval(() => {
      console.log("running interval"); ////1--35--27
      setCount((prevValue) => {
        //    console.log("setting states");
        console.log("setting state", prevValue);

        if (prevValue <= 6) {
          clearInterval(id); ////1--29--50

          return 6;
        }

        // console.log(prevValue);
        return prevValue - 1;
      });
    }, 1000);

    return () => {
      //1-38-48
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h3> Count: {count} </h3>

      <button
        onClick={() => {
          //  setCount(count + 1)

          //////********************************************

          // setCount((count) => {
          //   return  count+1
          // }  );

          //////*******************************************

          setCount((count) => {
            if (count > 15) return 15;

            return count + 1;
            // return  "hello"
          });
        }}
      >
        add 1
      </button>
    </div>
  );
};
