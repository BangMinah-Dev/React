import Data from "../data/Data.js";
import { useState } from "react";

function total() {
    let soSanPham = Data.reduce((total, product) => total + product.quantity, 0)
    // const [totalItems, setTotalItems] = useState(soSanPham);
    return soSanPham
}

function Header() {
    // const numberItems = props._data;
    // console.log(numberItems);
    // let sum = 0
    // for(let i = 0; i < numberItems.length; i++){
    //     sum += numberItems[i].quantity
    // }

    return (
        <header className="container">
            <h1>Shopping Cart</h1>

            <ul className="breadcrumb">
                <li>Home</li>
                <li>Shopping Cart</li>
            </ul>

            <span className="count">{total()} items in the bag</span>
        </header>
    );
}

export { Header, total };
