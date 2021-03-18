
function PromoCode(){
    return(
        <div className="promotion">
            <label htmlFor="promo-code">Have A Promo Code ?</label>
            <div className="input-group">
                <input type="text" id="promo-code"></input>
                <button type="button">
                    <i className="fas fa-angle-right"></i>
                </button>
            </div>
        </div>
    )
}

export default PromoCode