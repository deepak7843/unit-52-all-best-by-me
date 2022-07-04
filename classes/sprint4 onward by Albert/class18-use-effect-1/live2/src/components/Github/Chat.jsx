import { useEffect, useState } from "react";

function Chat() {
  const [user, setUser] = useState("Aman");
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    let id = setInterval(() => {
      setMessages((prev) => [...prev, "listening to more messages " + user]);
    }, 1000);

    console.log(`listening to ${id}, ${user} messages`);

    // cleanup
    const cleanup = () => {
      console.log( "17---",  `cleaning up, ${id} ${user} messages`);
    //   console.log( "17---",  `cleaning up, + "id" + "user" + messages`);

      clearInterval(id);
    //   setMessages([]);
    };
    return cleanup;

  }, [user]);

  return (
    <div>
      <div>
        <select value={user} onChange={(e) => setUser(e.target.value)}>
          <option value="Aman">Aman</option>
          <option value="Albert">Albert</option>
        </select>

        <div>
          <h3>Chat box</h3>
          <div style={{ border: "1px solid black", padding: "1rem" }}>
            {messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chat;
