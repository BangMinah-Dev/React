import "./App.css";
import { useState } from "react";
import Header from "./components/Header.js";
import Product from "./components/Product.js";
import Data from "./Data.js"


function App() {
    // Lấy tổng giá tiền ban đầu trong mảng
    function Subtotal(){
        const subtotal = Data.reduce((total, product) => total + product.price, 0)
        return subtotal
    } 

    const [price, setPrice] = useState(Subtotal())

    // Lấy số lượng sản phẩm ban đầu trong mảng
    function numberItems(){
        const numberItems = Data.reduce((total, product) => total + product.quantity, 0)
        return numberItems
    }

    // Dùng state để cập nhật lại giao diện
    const [totalItems, setTotalItems] = useState(numberItems)

    const [products, setProducts] = useState(Data)

    function removeItem(id){
        setProducts( () => products.filter( product => product.id !== id) ) 

        setTotalItems( () => products.filter( product => product.id !== id ).reduce((total, product) => total + product.quantity, 0) ) 

        setPrice( () => products.filter( product => product.id !== id ).reduce((total, product) => total + product.price, 0) )
    }

    return (
        <div className="App">
            <main>
                <Header totalItems={totalItems}></Header>

                <section className="container">
                    <ul className="products">
                        <Product data={products} action={removeItem}></Product>
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
                                Subtotal <span>$ {price.toFixed(2)}</span>
                            </li>
                            <li>
                                Tax <span>$ 5.00</span>
                            </li>
                            <li className="total">
                                Total <span>$ {price !== 0 ? (price + 5.00).toFixed(2) : 0}</span>
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
