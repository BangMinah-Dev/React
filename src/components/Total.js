function Total(props) {
    return (
        <section className="container">
            <div className="promotion">
                <label htmlFor="promo-code">Have A Promo Code?</label>
                <input
                    type="text"
                    id="promo-code"
                    defaultValue="1"
                    onChange={(event) => props.enterCode(event)}
                />
                <button type="button"></button>
                <p></p>
            </div>
            <div className="summary">
                <ul>
                    <li>
                        Subtotal <span>$ {props.subTotal.toFixed(2)}</span>
                    </li>
                    <li>
                        Tax <span>$ 5.00</span>
                    </li>
                    <li className="total">
                        Total{" "}
                        <span>
                            $ {props.subTotal !== 0 ? (props.subTotal + 5.0).toFixed(2) : 0}
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