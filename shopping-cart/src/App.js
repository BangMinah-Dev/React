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
                        <li><a href="#">Shopping Cart</a></li>
                    </ul>
                    <div className="count">3 items in the bag</div>
                </div>
            </header>
            <section>
                <ul className="list">
                    {/* <li className="row">
                        <div className="leftBox">
                            <div className="image">
                                <a href="#">
                                    <img src="https://via.placeholder.com/200x150" alt="image"></img>
                                </a>
                            </div>
                            <div className="detail">
                                <div className="name">
                                    <a href="#">PRODUCT ITEM NUMBER 1</a>
                                </div>
                                <div className="des">
                                    Description for product item number 1
                                </div>
                                <div className="price">$5.99</div>
                            </div>
                        </div>
                        <div className="rightBox">
                            <div className="quantity">
                                <input type="number" class="quantity" step="1" value="1"></input>
                            </div>
                            <div className="del">
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </li> */}
                    <Item></Item>
                </ul>
            </section>
            <section>
                <div className="bottom">
                    <div className="promotion">
                        <label for="promo-code">Have A Promo Code ?</label>
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
