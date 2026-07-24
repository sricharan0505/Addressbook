import Modal from "./Components/Popup/Modal";
import { useState } from "react";

function AddContact(){
    const button={
        backgroundColor: "#1b7a5a",
        color: "#ffffff",
        border: "none",
        padding: "10px 18px",
        borderRadius: "8px",
        fontWeight: "600",
        fontSize: "0.95rem",
        cursor: "pointer",
        position:"absolute",
        top:"34px",
        left:"90%"
    }
    const [showModal, setShowModal] = useState(false);
         
    return(
        <><button style={button} onClick={()=> setShowModal(true)} >+ Add contact</button>
            {showModal && <Modal onClose={()=>setShowModal(false)}/>}
        </>
    )
}
export default AddContact