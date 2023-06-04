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
  const [radioCheck, setRadioCheck] = useState(false)

  const finalPrice = state.cartItems.reduce(
    (acc, item) => (acc = acc + item.price * item.qty),
    0
  );
    function radioChecker(event){
      setRadioCheck(event.target.checked)
    }
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
      <div className="address">
        <ul className="address-list">
          {address?.map((item) => (
            <li key={item.id} className="add-item">
              <div onChange={(e) => radioChecker(e)}>
                <label htmlFor="">
                  <input type="radio" name="address" id="" />
                  <h4 className="user-name">Name: {item.name}</h4>
                  <p className="user-add">Address: {item.address}</p>
                  <p className="user-num">Contact Number: {item.number}</p>
                </label>
              </div>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setCurrAdd(item);
                }}
                className="edit-add"
              >
                Edit
              </button>
              <button onClick={() => deleteAdd(item.id)} className="del-add">Delete</button>
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
          <button onClick={setIsNewOpen} className="new-add">
            Add a new address
          </button>
          {isNewOpen && (
            <Modal
              closeModal={closeSaveModal}
              noChangeModal={setIsNewOpen}
              item={currAdd}
              updateData={addNewData}
            />
          )}
        </div>
      </div>

      <Pricing finalPrice={finalPrice} checker={false} radioCheck={radioCheck}/>
    </div>
  );
}
