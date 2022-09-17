import Button from "./Button";
import styles from "./App.module.css";
import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coinArr, setCoinArr] = useState([]);
    const [userMoney, setUserMoney] = useState(0);
    const onChange = (event) => {setUserMoney(event.target.value)};

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then(response => response.json())
            .then((json) => {
                setCoinArr(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>The Coins ({coinArr.length})</h1>
            {loading ? <strong>Loading...</strong> :
                <ul>
                    <input onChange={onChange} type="number" placeholder="input your money.."/>
                    <h3>USD is </h3>
                    {coinArr.map((item) => (
                        <li key={item.id}>{item.name} : {userMoney / item.quotes.USD.price} {item.symbol}</li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default App;
