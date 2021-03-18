
function Header(){
    return(
        <header>
            <h1 className="title">Shopping Cart</h1>
            <div className="info">
                <ul className="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="index.html">Shopping Cart</a></li>
                </ul>
                <div className="count">3 items in the bag</div>
            </div>
        </header>
    )
}

export default Header