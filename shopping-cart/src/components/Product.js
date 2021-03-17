
function Product() {
    const items = [
        {   
            "id" : "1",
            "image" : "https://via.placeholder.com/200x150",
            "alt" : "image_1",
            "name" : "PRODUCT ITEM NUMBER 1",
            "des" : "Description for product item number 1",
            "price" : "$5.99"
        },
        {
            "id" : "2",
            "image" : "https://via.placeholder.com/200x150",
            "alt" : "image_2",
            "name" : "PRODUCT ITEM NUMBER 2",
            "des" : "Description for product item number 2",
            "price" : "$9.99"
        },
    ]

    return(
        <ul className="list">
            {items.map( item => 
                <li className="row" key={item.id}>
                    <div className="leftBox">
                        <div className="image">
                            <a href="index.html">
                                <img src={item.image} alt={item.alt}></img>
                            </a>
                        </div>
                        <div className="detail">
                            <div className="name">
                                <a href="index.html">{item.name}</a>
                            </div>
                            <div className="des">
                                {item.des}
                            </div>
                            <div className="price">{item.price}</div>
                        </div>
                    </div>
                    <div className="rightBox">
                        <div className="quantity">
                            <input type="number" className="quantity" step="1" defaultValue="1"></input>
                        </div>
                        <div className="del">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </li>    
            )}   
        </ul>
    )
}


export default Product