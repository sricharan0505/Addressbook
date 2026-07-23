import style from './sidebar.module.css'

function Sidebar(){
    return(
        <aside className={style.sidebar}>
            <div>
                <input type="text" placeholder="search contacts" className={style.search}>
                </input>
            </div>
            <div className={style.sidebarMeta}>0 CONTACTS </div>
            <ul>
                <li className={style.sidebarEmpty}>No contacts yet. Please Click "Add contact" to create your first one.</li>
            </ul>
        </aside>
    )

}

export default Sidebar