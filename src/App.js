import "./App.css";
import { useState } from "react";
import React from "react"
import Header from "./components/Header.js";
import Product from "./components/Product.js";
// import Total from './components/Total.js';
import { PRODUCTS, PROMO_CODES } from "./Data.js";

function App() {
    // Dùng state để cập nhật lại dữ liệu, giao diện
    const [products, setProducts] = useState(PRODUCTS);

    // Lấy tổng giá tiền
    let subTotal = products.reduce(
        (total, product) => total + product.price * product.quantity,
        0
    );
    // Lấy tổng số lượng sản phẩm
    let numberItems = products.reduce(
        (total, product) => total + product.quantity,
        0
    );

    function removeItem(id) {
        const removeItem = products.filter((product) => product.id !== id);
        setProducts(removeItem);
    }

    function updateQuantity(event, id) {
        const inputValue = event.target.value;
        // console.log(inputValue, "id : ", id);
        // Lấy nguyên mảng hiện tại [...products] gán vào biến newArr
        let newArr = [...products];

        let index = newArr.findIndex((product) => product.id === id);
        // console.log("index = ", index);
        if (index > -1) {
            newArr[index].quantity = Number(inputValue);
        }
        setProducts(newArr);
    }

    const [text , setText] = useState("")
    const [discount, setDiscount] = useState("0")
    let percent = ""

    function enterCode(event){
        // console.log(event.target.value)
        let code = event.target.value
        // console.log(code)
        let newArr = [...PROMO_CODES]
        let index = newArr.findIndex((promo_code) =>  ( code === promo_code.code ) )
        // console.log(index)

        if(code === "" && index !== 0){
            setText("")
            percent = ""
            // console.log("% = " + percent)

        }else if(index !== 0){
            setText("Mã giảm giá chưa đúng")
            percent = ""
            // console.log("% = " + percent)
        }

        if(index > -1){
            percent = newArr[index].discountPercent
            setText( "Mã giảm giá " + percent + "%")
            // console.log("% = " + percent)
        } 
        
    }

    let textInput = React.createRef();

    function submitCode(){
        let code = textInput.current.value
        let newArr = [...PROMO_CODES]
        let discountPercent = newArr.findIndex((percent) => code === percent.code)
        if(discountPercent !== 0){
            setDiscount("0")
        }
        if(discountPercent > -1){
            setDiscount(newArr[discountPercent].discountPercent)
        }
    }

    return (
        <div className="App">
            <main>
                <Header totalItems={numberItems}></Header>
                <section className="container">
                    {products.length > 0 ? (
                        <Product
                            data={products}
                            actionRemove={removeItem}
                            actionQuantity={updateQuantity}
                        ></Product>
                    ) : (
                        <div className="noProduct">
                            <h2>Không có sản phẩm nào trong giỏ</h2>
                            <a href="index.html" className="btn">Quay lại mua hàng</a>
                        </div>
                    )}
                </section>
                {products.length > 0 && (
                    // <Total subTotal={subTotal} enterCode={enterCode}></Total>
                    <section className="container">
                        <div className="promotion">
                            <label htmlFor="promo-code">Have A Promo Code?</label>
                            <input type="text" id="promo-code" ref={textInput} defaultValue="" onChange={(event) => enterCode(event)} />
                            <button type="button" onClick={submitCode}></button>
                            <p>{text}</p>
                        </div>
                        <div className="summary">
                            <ul>
                                <li>
                                    Subtotal <span>$ {subTotal.toFixed(2)}</span>
                                </li>
                                <li>
                                    Tax <span>$ 5.00</span>
                                </li>
                                <li>Discount(%) <span>{discount}</span></li>
                                <li className="total">
                                    Total{" "}
                                    <span>
                                        $ {(subTotal - (subTotal * discount / 100) + 5.0).toFixed(2)}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout">
                            <button type="button">Check Out</button>
                        </div>
                    </section>
                )}
            
            </main>
        </div>
    );
}

export default App;
