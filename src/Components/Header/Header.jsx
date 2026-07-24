import HeaderStyle from './header.module.css'

function Header(){
    return(
        <header className={HeaderStyle.header}>
            <div className={HeaderStyle.topbar}>
                <div className={HeaderStyle.logo}>A</div>
                <h1>Address Book</h1>
            </div> 
        </header>

    );
}

export default Header