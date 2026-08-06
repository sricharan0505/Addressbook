import Detailpane from "./Detailpane"
import Sidebar from "./Sidebar"


function Layout({contacts,onSelect,selectedContact,searchTerm,setSearchTerm,onDelete,onEdit}){
    const container={

        display: "flex",
        flex: "1",
        overflow: "hidden",
        height:"100vh",
    }
    return(
        <div style={container}>
            <Sidebar
                contacts={contacts}
                onSelect={onSelect}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />

            <Detailpane selectedContact={selectedContact} 
                onDelete={onDelete}
                onEdit={onEdit}/>
        </div>
    )

}

export default Layout