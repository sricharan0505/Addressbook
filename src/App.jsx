import Header from "./Components/Header/Header"
import Sidebar from "./Components/Container/Sidebar"
import Detailpane from "./Components/Container/Detailpane"
import Layout from "./Components/Container/Layout"
import Modal from "./Components/Popup/Modal"
import AddContact from "./AddContact"
import {useState} from "react"
import { useEffect } from "react"



function App() {
   const [selectedContact, setSelectedContact] = useState(null);

    const [contacts, setContacts] = useState(()=>{
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : []
    });
    useEffect(()=>{localStorage.setItem("contacts",JSON.stringify(contacts))},[contacts])
    useEffect(()=> {if(contacts.length>0 && !selectedContact){
      setSelectedContact(contacts[0])
    }},[contacts, selectedContact])

    const [showModal, setShowModal] = useState(false);
    const [editingContact,setEditingContact]=useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const addContact = (contact) => {
        setContacts(prev => [...prev, contact]);
        setSelectedContact(contact);
        setShowModal(false);
    };

const deleteContact = (id) => {
    const updatedContacts = contacts.filter(
        contact => contact.id !== id
    );

    setContacts(updatedContacts);

    if (updatedContacts.length > 0) {
        setSelectedContact(updatedContacts[0]);
    } else {
        setSelectedContact(null);
    }
};

const updateContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
        contact.id === updatedContact.id
            ? updatedContact
            : contact
    );

    setContacts(updatedContacts);
    setSelectedContact(updatedContact);
    setShowModal(false);
    setEditingContact(null);
};

    return (
        <>
            <Header /*onAdd={() => setShowModal(true)} */ />
            <Layout
              contacts={contacts}
              selectedContact={selectedContact}
              onSelect={setSelectedContact}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              onDelete={deleteContact}
              onEdit={(contact)=>{setEditingContact(contact);
              setShowModal(true); }}/>
            <AddContact onAdd={()=>setShowModal(true)}/>
            {showModal && <Modal onClose={()=>{setShowModal(false);
            setEditingContact(null);}} 
            onAdd={addContact} onUpdate={updateContact} 
            editingContact={editingContact}/>}
        </>
    );
}

export default App
