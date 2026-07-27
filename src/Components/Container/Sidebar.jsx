import style from './sidebar.module.css'

function Sidebar({contacts,onSelect,searchTerm,setSearchTerm}){
    const filteredContacts = contacts.filter((contact) => {
    const fullName =
        `${contact.firstName} ${contact.lastName}`.toLowerCase();

    return (
        fullName.includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
 });
//     const search = (searchTerm || "").toLowerCase();

// return (
//     fullName.includes(search) ||
//     contact.email.toLowerCase().includes(search)
// );
    return(
        <aside className={style.sidebar}>
            <div>
                <input type="text" placeholder="Search contacts" className={style.search} value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}>
                </input>
            </div>
            <div className={style.sidebarMeta}>{contacts.length} CONTACTS </div>
            <ul className={style.sidebarContacts}>
                {contacts.length===0 ? (
                    <li className={style.sidebarEmpty}>No contacts yet. Please Click "Add contact" to create your first one.</li>) :
                    (filteredContacts.map((contact,index)=>(<li key={contact.id}  className={style.contactItem}  onClick={() => onSelect(contact)} >
                         <div className={style.avatar}>
                             {contact.firstName.charAt(0).toUpperCase()}
                         </div>
                         <div>
                            <div className={style.contactName}>
                                 {contact.firstName} {contact.lastName}
                            </div>
                            <div className={style.contactEmail}>
                                 {contact.email}
                            </div>
                         </div>
                    </li>)))
                    }
            </ul>
        </aside>
    )

}

export default Sidebar