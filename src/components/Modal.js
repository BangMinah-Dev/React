export default function Modal({ productName, closeModal, confirm }) {
    return (
        <div>
            <div className="backdrop" onClick={closeModal}></div>
            <div className="modal">
                <h2>
                    Bạn có chắc xóa sản phẩm <span>{productName}</span>{" "}
                </h2>
                <button onClick={confirm}>OK</button>
                <button onClick={closeModal}>Cancel</button>
            </div>
        </div>
    );
}
