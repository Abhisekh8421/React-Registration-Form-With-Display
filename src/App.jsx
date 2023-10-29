import React, { useState } from "react";
import Displaycard from "./components/Displaycard";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  function handleData(dataset) {
    const newData = { ...dataset, id: uuidv4() };
    setData([...data, newData]);
  }

  console.log(data);

  return (
    <div className="app-container">
      <Form handleData={handleData} />
      <div className="card-container">
        {data.map((info) => (
          <Displaycard
            id={info.id}
            EmailName={info.Email}
            Address={info.Address}
            Username={info.username}
            Phonenumber={info.phone}
            Birthday={info.Birthday}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
