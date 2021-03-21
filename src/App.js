import "./App.css";
import {Header, total} from "./components/Header.js";
import Product from "./components/Product.js";
import Data from "./data/Data.js"

function App() {
    return (
        
        <div className="App">
            <main>
                <Header></Header>

                <section className="container">
                    <ul className="products">
                        <Product _data={Data}></Product>
                    </ul>
                </section>

                <section className="container">
                    <div className="promotion">
                        <label htmlFor="promo-code">Have A Promo Code?</label>
                        <input type="text" id="promo-code" />
                        <button type="button"></button>
                    </div>

                    <div className="summary">
                        <ul>
                            <li>
                                Subtotal <span>$21.97</span>
                            </li>
                            <li>
                                Tax <span>$5.00</span>
                            </li>
                            <li className="total">
                                Total <span>$26.97</span>
                            </li>
                        </ul>
                    </div>

                    <div className="checkout">
                        <button type="button">Check Out</button>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
