    import Header from "./Components/Header/Header"
    // import Sidebar from "./Components/Container/Sidebar"
    // import Detailpane from "./Components/Container/Detailpane"
    import Layout from "./Components/Container/Layout"
    import Modal from "./Components/Popup/Modal"
    import AddContact from "./AddContact"
    import {useState} from "react"
    import { useEffect } from "react"
    import api from "./api/api";


    function App() {
        const [selectedContact, setSelectedContact] = useState(null);
        const [showModal, setShowModal] = useState(false);
        const [editingContact,setEditingContact]=useState(null);
        const [searchTerm, setSearchTerm] = useState("");
        const [contacts, setContacts] = useState([]);
        
        useEffect(() => {
            const fetchContacts = async () => {
                try {
                    const response = await api.get("/contacts");
                    setContacts(response.data);
                } catch (err) {console.error(err);}
            };
            fetchContacts();
        }, []);
        
        useEffect(()=> {if(contacts.length>0 && !selectedContact){
        setSelectedContact(contacts[0])
        }},[contacts, selectedContact])



        // const addContact = (contact) => {
        //     setContacts(c => [...c, contact]);
        //     setSelectedContact(contact);
        //     setShowModal(false);
        // };

        const addContact = async (contact) => {
            console.log(contact)
            try {
                const response = await api.post("/contacts", contact);
                setContacts(prev => [...prev, response.data]);
                setSelectedContact(response.data);
                setShowModal(false);
            } catch (err) {console.log(err.response.data)}
        }


        // const deleteContact = (id) => {
        //     const updatedContacts = contacts.filter(
        //         contact => contact.id !== id
        //     );

        //     setContacts(updatedContacts);

        //     if (updatedContacts.length > 0) {
        //         setSelectedContact(updatedContacts[0]);
        //     } else {
        //         setSelectedContact(null);
        //     }
        // };

        const deleteContact = async (id) => {
            try {
                await api.delete(`/contacts/${id}`);
                const updatedContacts = contacts.filter(contact => contact.id !== id);
                setContacts(updatedContacts);
                if (updatedContacts.length > 0) {
                    setSelectedContact(updatedContacts[0]);
                } else {
                    setSelectedContact(null);
                }} catch (err) {console.error(err)}
            }

        // const updateContact = (updatedContact) => {
        //     const updatedContacts = contacts.map(contact =>
        //         contact.id === updatedContact.id
        //         ? updatedContact
        //         : contact
        //     );

        //     setContacts(updatedContacts);
        //     setSelectedContact(updatedContact);
        //     setShowModal(false);
        //     setEditingContact(null);
        // };

        const updateContact = async (contact) => {
            try {
                const response = await api.put(`/contacts/${contact.id}`, contact);
                const updatedContacts = contacts.map(c => c.id === contact.id ? response.data : c)
                setContacts(updatedContacts);
                setSelectedContact(response.data);
                setShowModal(false);
                setEditingContact(null);
            } catch (err) {console.error(err)}
        }

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
