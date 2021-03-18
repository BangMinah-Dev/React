import "./App.css";
import Header from "./components/Header"
import Item from "./components/Product.js"
import PromoCode from "./components/PromoCode.js"

function App() {
    return (
        <div className="App">
            <Header></Header>
            <section>
                <Item></Item>
            </section>
            <section>
                <div className="bottom">
                    <PromoCode></PromoCode>
                    <div className="summary">
                        <ul>
                            <li>
                                Subtotal
                                <span>$21.97</span>
                            </li>
                            <li>
                                Tax
                                <span>$5.00</span>
                            </li>
                            <li>
                                Total
                                <span>$26.97</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="checkout">
                    <button type="button">Check Out <i className="fas fa-angle-right"></i></button>
                </div>
            </section>
        </div>
    );
}

export default App;
