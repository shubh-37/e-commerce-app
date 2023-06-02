import { useState } from "react"
import ReactModal from "react-modal"
const addressArray = [
    {  
        id: 1,
        name: "Shubh Arya",
        address: "B/101, green tower, andheri-west, mumbai-400058",
        number: 9987232477
    },
    {  
        id: 2,
        name: "masdf",
        address: "B/101, green tower, andheri-west, mumbai-400058",
        number: 9987232477
    }
]
export default function AddressPage(){
    const [isOpen, setIsOpen] = useState(false);
    const [address, setAddress] = useState(addressArray);
    const [data, setData] = useState({});
    function closeModal(){
        const updatedAdd = address.map((item) => item.id === data.id ? data : item);
        setAddress(updatedAdd);
        setIsOpen(false)  
    }
    function updateData(e, newId){
        const fixed = addressArray.find(({id}) => id === newId)
        setData({
            ...fixed,
            [e.target.name]: e.target.value
        })
        console.log(data)
    }
    return (
        <div>
            <ul>
                {
                    address.map(item => (
                        <li key={item.id}>
                            <div>
                                <input type="radio" name="" id="" />
                                <h4>{item.name}</h4>
                                <p>{item.address}</p>
                                <p>{item.number}</p>
                            </div>
                            <button onClick={() => setIsOpen(true)}>Edit</button>
                            <button>Delete</button>
                                <ReactModal
                                    isOpen={isOpen}
                                    contentLabel="Example Modal"
                                    onRequestClose={closeModal}
                                    style={{content: {margin: "auto",
                                            width: "30%",
                                            backgroundColor: "white",
                                            height: "50vh",
                                            display: "flex",
                                            flexDirection: "column"}}}>
                                    Name: <input type="text" name="name" id="" defaultValue={item.name} onChange={(e) => updateData(e,item.id)}/>
                                    Address: <input type="text" name="address" id="" defaultValue={item.address} onChange={(e) => updateData(e, item.id)}/>
                                    Number: <input type="number" name="number" id="" defaultValue={item.number} onChange={(e) => updateData(e, item.id)}/>
                                    <button onClick={closeModal}>Save address</button>
                                </ReactModal>
                        </li>
                    ))
                }
            </ul>
            <button onClick={setIsOpen}>Add a new address</button>
        </div>
    )
}