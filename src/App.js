import React, { useState } from "react";
import { List } from "./list.js";
import { data } from "./data.js";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <section className="main">
        <article className="container">
          <div className="cardName">Birthday Reminder</div>
          <hr></hr>
          <List people={people}></List>
          <button className="clearBtn" onClick={() => setPeople([])}>
            Delete All
          </button>
        </article>
      </section>
    </>
  );
}

export default App;
