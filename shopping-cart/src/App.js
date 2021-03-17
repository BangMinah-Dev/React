import "./App.css";
import Item from "./Product.js"

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">Shopping Cart</h1>
                <div className="info">
                    <ul className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html">Shopping Cart</a></li>
                    </ul>
                    <div className="count">3 items in the bag</div>
                </div>
            </header>
            <section>
                <Item></Item>
            </section>
            <section>
                <div className="bottom">
                    <div className="promotion">
                        <label htmlFor="promo-code">Have A Promo Code ?</label>
                        <div className="input-group">
                            <input type="text" id="promo-code"></input>
                            <button type="button">
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
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
                    <button type="button">Check Out <i className="fas fa-angle-right"></i> </button>
                </div>
            </section>
        </div>
    );
}

export default App;
