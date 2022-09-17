import Button from "./Button";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function Hello() {
    function effectCreFn() {
        console.log("created :)");
        return effectDesFn();
    }

    function effectDesFn() {
        console.log("destroyed :)");
    }

    useEffect(effectCreFn, []);
    return <h1>Hello</h1>
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () => setShowing((prev) => !prev);
    return (
        <div>
            {showing ? <Hello /> : null}
            <button onClick={onClick}>{showing ? "show" : "hide"}</button>
        </div>
    );
}

export default App;
