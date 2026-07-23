import HeaderStyle from './header.module.css'

function Header(){
    return(
        <header className={HeaderStyle.header}>
            <div className={HeaderStyle.topbar}>
                <div className={HeaderStyle.logo}>A</div>
                <h1>Address Book</h1>
            </div> 
            <button className={HeaderStyle.button}>+ Add contact</button>
        </header>

    );
}

export default Header