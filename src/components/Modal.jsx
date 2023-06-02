import "../css/modal.css";

export default function Modal({ item, updateData, closeModal, noChangeModal }) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          opacity: "0.5",
          backgroundColor: "grey",
        }}
      ></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-btn">
            <button onClick={() => noChangeModal(false)}> X </button>
          </div>

          <div className="title-modal">
            <h2>Please enter your new details</h2>
          </div>
          <div className="body-modal">
            Name:{" "}
            <input
              type="text"
              name="name"
              id=""
              defaultValue={item.name}
              onChange={(e) => updateData(e, item.id)}
            />
            Address:{" "}
            <input
              type="text"
              name="address"
              id=""
              defaultValue={item.address}
              onChange={(e) => updateData(e, item.id)}
            />
            Number:{" "}
            <input
              type="number"
              name="number"
              id=""
              defaultValue={item.number}
              onChange={(e) => updateData(e, item.id)}
            />
          </div>
          <div className="footer-modal">
            <button onClick={() => noChangeModal(false)}>Cancel</button>
            <button onClick={() => closeModal()}>Save Address</button>
          </div>
        </div>
      </div>
    </>
  );
}
