import Button from "./Button";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos(currentArr => [toDo, ...currentArr]);
        setToDo("");
    };
    console.log(toDos);
    return <div>
        <h1>My To Dos {toDos.length}</h1>
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="Write to do.."
            />
            <button>Add to Do</button>
        </form>
        <hr />
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>;
}

export default App;
