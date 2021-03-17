
function Product(){
    const item = [
        {
            "name" : "PRODUCT ITEM NUMBER 1",
            "des" : "Description for product item number 1",
            "price" : "$5.99"
        },
        {
            "name" : "PRODUCT ITEM NUMBER 2",
            "des" : "Description for product item number 2",
            "price" : "$9.99"
        },
    ]
    

    let listItems = []

    for(let i = 0; i < item.length; i++){
        listItems.push(
            <li className="row">
                <div className="leftBox">
                    <div className="image">
                        <a href="#">
                            <img src="https://via.placeholder.com/200x150" alt="image"></img>
                        </a>
                    </div>
                    <div className="detail">
                        <div className="name">
                            <a href="#">{item[i].name}</a>
                        </div>
                        <div className="des">
                            {item[i].des}
                        </div>
                        <div className="price">{item[i].price}</div>
                    </div>
                </div>
                <div className="rightBox">
                    <div className="quantity">
                        <input type="number" class="quantity" step="1" value="2"></input>
                    </div>
                    <div className="del">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </li>
        ) 
    }
    console.log(listItems)


    return(
        <li className="row">
            <div className="leftBox">
                <div className="image">
                    <a href="#">
                        <img src="https://via.placeholder.com/200x150" alt="image"></img>
                    </a>
                </div>
                <div className="detail">
                    <div className="name">
                        <a href="#">{item[1].name}</a>
                    </div>
                    <div className="des">
                        {item[1].des}
                    </div>
                    <div className="price">{item[1].price}</div>
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
        </li>
    )
}


export default Product