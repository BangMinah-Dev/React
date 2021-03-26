import "./App.css";
import { useState } from "react";
import React from "react";
import Header from "./components/Header.js";
import Product from "./components/Product.js";
import Total from "./components/Total.js";
import { PRODUCTS, PROMO_CODES } from "./Data.js";
import Modal from "./components/Modal";


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
        console.log(removeItem);
        // setProducts(removeItem);
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

    const [text, setText] = useState("");
    const [discount, setDiscount] = useState(0);
    let percent = "";

    function enterCode(event) {
        let code = event.target.value;

        let newArr = [...PROMO_CODES];
        let index = newArr.findIndex((promo_code) => code === promo_code.code);

        if (code === "" && index !== 0) {
            setText("");
            percent = "";
        } else if (index !== 0) {
            setText("Mã giảm giá chưa đúng");
            percent = "";
        }

        if (index > -1) {
            percent = newArr[index].discountPercent;
            setText("Mã giảm giá " + percent + "%");
        }
    }

    let textInput = React.createRef();

    function submitCode() {
        let code = textInput.current.value;
        let newArr = [...PROMO_CODES];
        let discountPercent = newArr.findIndex(
            (percent) => code === percent.code
        );
        if (discountPercent !== 0) {
            setDiscount("0");
        }
        if (discountPercent > -1) {
            setDiscount(newArr[discountPercent].discountPercent);
        }
    }

    const [modal, setModal] = useState(false);
    const [idToRemove, setidToRemove] = useState("");
    const [productName, setProductName] = useState("");

    function openModal(id, name) {
        setProductName(name)
        setidToRemove(id);
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    function confirm() {
        const removeItem = products.filter((product) => product.id !== idToRemove);
        setProducts(removeItem);
        setModal(false);
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
                            modal={openModal}
                        ></Product>
                    ) : (
                        <div className="noProduct">
                            <h2>Không có sản phẩm nào trong giỏ</h2>
                            <a href="index.html" className="btn">
                                Quay lại mua hàng
                            </a>
                        </div>
                    )}
                </section>
                {products.length > 0 && (
                    <Total
                        subTotal={subTotal}
                        enterCode={enterCode}
                        submitCode={submitCode}
                        text={text}
                        discount={discount}
                        textInput={textInput}
                    ></Total>
                )}

                {modal === true && (
                    <Modal
                        confirm={confirm}
                        closeModal={closeModal}
                        productName={productName}
                        modal={modal}
                    ></Modal>
                )}
            </main>
        </div>
    );
}

export default App;
