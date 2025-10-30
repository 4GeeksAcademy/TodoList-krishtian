import React from "react";
import { useState } from "react";
import "./index.css";

const Home = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  function handleEnter(e) {
    if (e.key === "Enter" && nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  }

  function borrarTarea(index) {
    const updatedTareas = tareas.filter((_, i) => i !== index);
    setTareas(updatedTareas);
  }

  return (
    <>
      <div>
        <h1>TODOS</h1>

        <div className="todoContainer">
          <input
            className="todoInput"
            type="text"
            placeholder="Anadir tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyDown={handleEnter}
          />

          <ul className="todoList">
            {tareas.length === 0 ? (
              <p className="noTareas">No hay tareas pendientes</p>
            ) : (
              tareas.map((tarea, index) => (
                <li key={index} className="todoItem">
                  {tarea}
                  <span
                    className="deleteButton"
                    onClick={() => borrarTarea(index)}
                  >
                    &#10060;
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="footer">
        {tareas.length > 0
          ? `${tareas.length} tarea${tareas.length > 1 ? "s" : ""} pendiente${
              tareas.length > 1 ? "s" : ""
            }`
          : null}
      </div>
    </>
  );
};

export default Home;
