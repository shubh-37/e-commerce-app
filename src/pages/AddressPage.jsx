import { useState } from "react";
import "../css/checkout.css";
import Modal from "../components/Modal";
const addressArray = [
  {
    id: 1,
    name: "Shubh Arya",
    address: "B/101, green tower, andheri-west, mumbai-400058",
    number: 9987232477,
  },
  {
    id: 2,
    name: "mota bhai",
    address: "B/101, green tower, andheri-west, mumbai-400058",
    number: 9987232477,
  },
];
export default function AddressPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState(addressArray);
  const [data, setData] = useState({});
  const [currAdd, setCurrAdd] = useState({});
  function closeModal() {
    const updatedAdd = address.map((item) =>
      item.id === data.id ? data : item
    );
    setAddress(updatedAdd);
    setIsOpen(false);
  }
  function updateData(e, newId) {
    const fixed = addressArray.find(({ id }) => id === newId);
    setData({
      ...fixed,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  }
  return (
    <div className="checkout-parent">
      <ul>
        {address.map((item) => (
          <li key={item.id}>
            <div>
              <input type="radio" name="" id="" />
              <h4>{item.name}</h4>
              <p>{item.address}</p>
              <p>{item.number}</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(true);
                setCurrAdd(item);
              }}
            >
              Edit
            </button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={setIsOpen}>Add a new address</button>
      {isOpen && (
        <Modal
          item={currAdd}
          updateData={updateData}
          closeModal={closeModal}
          noChangeModal={setIsOpen}
        />
      )}
    </div>
  );
}
