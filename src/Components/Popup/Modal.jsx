import ModalStyle from './modal.module.css'

function Modal({onClose}) {
    
  return (
    <div className={ModalStyle.modaloverlay} onClick={onClose}>

        <div className={ModalStyle.modalcontainer} onClick={(e)=>e.stopPropagation()}>
            <header className={ModalStyle.modalheader}>
                <h2 className={ModalStyle.modaltitle}>Add Contact</h2>
                <button type="button" className={ModalStyle.modalclosebtn} onClick={onClose}>&times;</button>
            </header>

            <div className={ModalStyle.formvalidationalert}>
                <p>Please fix the highlighted fields below.</p>
            </div>

            <form className={ModalStyle.modalform}>
                <div className={ModalStyle.formrowthree}>
                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="firstname" className={ModalStyle.formlabel}>First name <span>*</span></label>
                        <input  name="firstName" type="text" className={ModalStyle.forminput}  />
                        <div  className={ModalStyle.fielderrortext} style={{ display: "none" }}>First name is required.</div>
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="middlename" className={ModalStyle.formlabel}>Middle name</label>
                        <input  name="middleName" type="text" className={ModalStyle.forminput}/>
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="lastname" className={ModalStyle.formlabel}>Last name <span>*</span></label>
                        <input name="lastName" type="text" className={ModalStyle.forminput}/>
                        <div  className={ModalStyle.fielderrortext} style={{ display: "none" }}>Last name is required.</div>
                    </div>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="email" className={ModalStyle.formlabel}>Email <span>*</span></label>
                    <input  name="email" type="email" placeholder="name@example.com" className={ModalStyle.forminput} />
                    <div  className={ModalStyle.fielderrortext} style={{ display: "none" }}>Email is required.</div>
                </div>

                <div className={ModalStyle.formrowtwo}>
                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="phone" className={ModalStyle.formlabel}>Phone</label>
                        <input  name="phone" type="tel" placeholder="(555) 123456ModalStyle." className={ModalStyle.forminput} />
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="altphone" className={ModalStyle.formlabel}>Alternate Phone</label>
                        <input name="alternatePhone" type="tel" placeholder="(555) 123456ModalStyle." className={ModalStyle.forminput}/>
                    </div>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="website" className={ModalStyle.formlabel}>Website</label>
                    <input  name="website" type="url" placeholder="https://example.com"  className={ModalStyle.forminput}/>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="address" className={ModalStyle.formlabel}>Address</label>
                    <textarea  name="address" className={ModalStyle.formtextarea} rows="4" placeholder="Street, City, State ZIP"></textarea>
                </div>
            </form>

            <footer className={ModalStyle.modalfooter}>
                <button  className={ModalStyle.btnsecondary} type="button" onClick={onClose}>Cancel</button>
                <button  className={ModalStyle.btnprimary} type="button">Add Contact</button>
            </footer>
        </div>
    </div>
  );
}

export default Modal;