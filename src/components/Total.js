function Total(props) {
    return (
        <section className="container">
                        <div className="promotion">
                            <label htmlFor="promo-code">Have A Promo Code?</label>
                            <input type="text" id="promo-code" ref={props.textInput} defaultValue="" onChange={(event) => props.enterCode(event)} />
                            <button type="button" onClick={props.submitCode}></button>
                            <p>{props.text}</p>
                        </div>
                        <div className="summary">
                            <ul>
                                <li>
                                    Subtotal <span>{(props.subTotal).toLocaleString()} đ</span>
                                </li>
                                <li>
                                    Tax <span>{(props.subTotal * 10 / 100).toLocaleString()} đ</span>
                                </li>
                                <li>Discount(%) <span>{props.discount}</span></li>
                                <li className="total">
                                    Total{" "}
                                    <span>
                                        {(props.subTotal - (props.subTotal * props.discount / 100) + (props.subTotal * 10 / 100)).toLocaleString()} đ
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="checkout">
                            <button type="button">Check Out</button>
                        </div>
                    </section>
    );
}
export default Total;