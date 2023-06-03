import { useContext, useState } from "react";
import "../css/checkout.css";
import Modal from "../components/Modal";
import { productContext } from "../contexts/ProductContProvider";
import Pricing from "../components/Pricing";
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
  const [isNewOpen, setIsNewOpen] = useState(false);
  const { state } = useContext(productContext);

  const finalPrice = state.cartItems.reduce(
    (acc, item) => (acc = acc + item.price * item.qty),
    0
  );

  function closeModal() {
    const updatedAdd = address.map((item) =>
      item.id === data.id ? data : item
    );
    setAddress(updatedAdd);
    setIsOpen(false);
  }

  function closeSaveModal() {
    setAddress([...address, data]);
    setIsNewOpen(false);
  }
  function updateData(e, newId) {
    console.log(typeof newId);
    console.log(addressArray);
    const fixed = address.find(({ id }) => id === newId);
    console.log(fixed);
    setData({
      ...fixed,
      [e.target.name]: e.target.value,
    });
  }
  function addNewData(e) {
    setData({
      ...data,
      id: Math.floor(Math.random() * 1000 + 1),
      [e.target.name]: e.target.value,
    });
    console.log(data);
  }
  function deleteAdd(itemId) {
    const updatedAdd = address.filter(({ id }) => id !== itemId);
    setAddress(updatedAdd);
  }
  return (
    <div className="checkout-parent">
      <ul>
        {address?.map((item) => (
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
            <button onClick={() => deleteAdd(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isOpen && (
        <Modal
          item={currAdd}
          updateData={updateData}
          closeModal={closeModal}
          noChangeModal={setIsOpen}
        />
      )}
      <div>
        <button onClick={setIsNewOpen}>Add a new address</button>
        {isNewOpen && (
          <Modal
            closeModal={closeSaveModal}
            noChangeModal={setIsNewOpen}
            item={currAdd}
            updateData={addNewData}
          />
        )}
      </div>
      <Pricing finalPrice={finalPrice} checker={false} />
    </div>
  );
}
