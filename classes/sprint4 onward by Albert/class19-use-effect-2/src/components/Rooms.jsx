import { useState, useEffect } from "react";

const rooms = {
  bedroom: {
    name: "bedroom",
    light: false,
    fan: false,
    tempInC: 20
  },
  kitchen: {
    name: "kitchen",
    light: false,
    fan: false,
    tempInC: 35
  }
};

const Room = ({ name, light, fan, tempInC }) => {

   console.log( "*****---", name, light, fan, tempInC);

  const [lightState, setLightState] = useState(light);

  console.log("lightState---", lightState);
 console.log("*****************21");



  const [fanState, setFanState] = useState(fan);
  const [tempState, setTempState] = useState(tempInC);

  // useEffect
  useEffect(() => {
    const id = setTimeout(() => {
      setLightState(true);
      console.log(4000);
    }, 4000);

    ///// cleanup
    return () => {
      console.log("clearTimeout------***");
      clearTimeout(id);
      setLightState(false);
      setFanState(false);
      setTempState(tempInC);
    };
  }, [name]);

  useEffect(() => {
    if (tempState > 35) {

      setFanState(true);
    } 
    else {
      setFanState(false);
    }

    return () => {
      setTempState(tempInC);
    };

  }, [tempState, tempInC]);

  console.log("return start----*****");

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <button>LIGHT {lightState ? "TRUE" : "FALSE"}</button>
      </div>
      <div>
        <button>FAN {fanState ? "TRUE" : "FALSE"}</button>
      </div>

      <div>
        temperature {tempState}

        <br />
        <button onClick={() => setTempState((prev) => prev + 1)}>
          TEMP INCR{" "}
        </button>
        <button onClick={() => setTempState((prev) => prev - 1)}>
          TEMP DEC{" "}
        </button>
      </div>
 
      <div></div>
    </div>
  );
};

function Rooms() {
  const [currentRoom, setCurrentRoom] = useState("bedroom");
  // const [currentRoom, setCurrentRoom] = useState(rooms["bedroom"]);


  const [roomDetails, setRoomDetails] = useState(rooms);

  const { name, light, fan, tempInC } = roomDetails[currentRoom];

  console.log("roomDetails---", roomDetails );

 console.log("currentRoom--", currentRoom );
 console.log("roomDetails[currentRoom]-----", roomDetails[currentRoom]);

  return (
    <>
      <div>

        <div>
          <button
          //  disabled
            disabled={currentRoom === "bedroom"}
            onClick={() => setCurrentRoom("bedroom")}
          >
            Move to BedRoom
          </button>
        </div>


        <div>
          <button
            disabled={currentRoom === "kitchen"}
            onClick={() => setCurrentRoom("kitchen")}
          >
            Move to Kitchen
          </button>
        </div>

      </div>
<br /> <br />
      <div style={{border: "2px solid red" }} >
        {/* does not get removed when you click on kitchen */}
        <Room name={name} light={light} fan={fan} tempInC={tempInC} />
      </div>

      <div></div>
    </>
  );
}
export default Rooms;
