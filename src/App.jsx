import Header from "./Components/Header/Header"
import Sidebar from "./Components/Container/Sidebar"
import Detailpane from "./Components/Container/Detailpane"
import Layout from "./Components/Container/Layout"
import Modal from "./Components/Popup/Modal"
import AddContact from "./AddContact"



function App() {
  return(
    <>  
    <Header/>
    <AddContact/>
    <Layout/>
    </>
  )

}

export default App
