import Detailpane from "./Detailpane"
import Sidebar from "./Sidebar"


function Layout(){
    const container={

        display: "flex",
        flex: "1",
        overflow: "hidden",
    }
    return(
        <div style={container}>
            <Sidebar/>
            <Detailpane/>
        </div>
    )

}

export default Layout