import ModalStyle from './modal.module.css'
import Detailpane from '../Container/Detailpane';
import { useState,useEffect } from 'react';

function Modal({onClose,onAdd,onUpdate,editingContact}) {
    const [formData, setFormData] = useState({
        firstName:"",
        middleName:"",
        lastName:"",
        email:"",
        phone:"",
        alternatePhone:"",
        website:"",
        address:""
    });

    const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: ""
});
    const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

    useEffect(() => {
    if (editingContact) {
        setFormData(editingContact);
    } else {
        setFormData({
            firstName:"",
            middleName:"",
            lastName:"",
            email:"",
            phone:"",
            alternatePhone:"",
            website:"",
            address:""
        });
    }
 }, [editingContact]);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = () => {

    if (!validateForm()) return;

    if (editingContact) {

        onUpdate(formData);

    } else {

        onAdd({
            id: Date.now(),
            ...formData
        });

    }

};
 
  return (
    <div className={ModalStyle.modaloverlay} onClick={onClose}>

        <div className={ModalStyle.modalcontainer} onClick={(e)=>e.stopPropagation()}>
            <header className={ModalStyle.modalheader}>
                <h2 className={ModalStyle.modaltitle}>{editingContact ? "Edit Contact" : "Add Contact"}</h2>
                <button type="button" className={ModalStyle.modalclosebtn} onClick={onClose}>&times;</button>
            </header>

            {Object.keys(errors).length > 0 && (
                <div className={ModalStyle.formvalidationalert}>
                    <p>Please fix the highlighted fields below.</p>
                </div>
            )}

            <form className={ModalStyle.modalform}>
                <div className={ModalStyle.formrowthree}>
                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="firstname" className={ModalStyle.formlabel}>First name <span>*</span></label>
                        <input  name="firstName" type="text" className={ModalStyle.forminput} value={formData.firstName} onChange={handleChange}  />
                        <div  className={ModalStyle.fielderrortext} >{errors.firstName}</div>
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="middlename" className={ModalStyle.formlabel}>Middle name</label>
                        <input  name="middleName" type="text" className={ModalStyle.forminput} value={formData.middleName} onChange={handleChange}/>
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="lastname" className={ModalStyle.formlabel}>Last name <span>*</span></label>
                        <input name="lastName" type="text" className={ModalStyle.forminput } value={formData.lastName} onChange={handleChange}/>
                        <div  className={ModalStyle.fielderrortext} >{errors.lastName}</div>
                    </div>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="email" className={ModalStyle.formlabel}>Email <span>*</span></label>
                    <input  name="email" type="email" placeholder="name@example.com" className={ModalStyle.forminput} value={formData.email} onChange={handleChange} />
                    <div  className={ModalStyle.fielderrortext} >{errors.email}</div>
                </div>

                <div className={ModalStyle.formrowtwo}>
                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="phone" className={ModalStyle.formlabel}>Phone</label>
                        <input  name="phone" type="tel" placeholder="(555) 123456ModalStyle." className={ModalStyle.forminput} value={formData.phone} onChange={handleChange} />
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="altphone" className={ModalStyle.formlabel}>Alternate Phone</label>
                        <input name="alternatePhone" type="tel" placeholder="(555) 123456ModalStyle." className={ModalStyle.forminput} value={formData.alternatePhone} onChange={handleChange}/>
                    </div>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="website" className={ModalStyle.formlabel}>Website</label>
                    <input  name="website" type="url" placeholder="https://example.com"  className={ModalStyle.forminput} value={formData.website} onChange={handleChange}/>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="address" className={ModalStyle.formlabel}>Address</label>
                    <textarea  name="address" className={ModalStyle.formtextarea} rows="4" placeholder="Street, City, State ZIP" value={formData.address} onChange={handleChange}></textarea>
                </div>
            </form>

            <footer className={ModalStyle.modalfooter}>
                <button  className={ModalStyle.btnsecondary} type="button" onClick={onClose}>Cancel</button>
                <button  className={ModalStyle.btnprimary} type="button" onClick={handleSubmit}>{editingContact ? "Save Changes" : "Add Contact"}</button>
            </footer>
        </div>
    </div>
  );
} 

export default Modal;