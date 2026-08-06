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
    email: "",
    phone:"",
    alternatePhone:"",
    website:""
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
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()){
        newErrors.phone = "Phone is required";
    }
    else if (!/^[0-9]\d{9}$/.test(formData.phone)) {
        newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (formData.alternatePhone && !/^[0-9]\d{9}$/.test(formData.alternatePhone)) {
        newErrors.alternatePhone = "Enter a valid alternate phone number.";
    }

    if (formData.website && !/^https?:\/\/([\w-]+\.)+[\w-]{2,}(\/.*)?$/.test(formData.website)) {
        newErrors.website = "Enter a valid website URL.";
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

    // const handleChange=(e)=>{
    //     setFormData({...formData,[e.target.name]:e.target.value})
    // }

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const handleSubmit = () => {

    if (!validateForm()) return;

    if (editingContact) {

        onUpdate(formData);

    } else {

        onAdd({
            userId: 1,
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
                        {errors.firstName &&(<div  className={ModalStyle.fielderrortext} >{errors.firstName}</div>)}
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="middlename" className={ModalStyle.formlabel}>Middle name</label>
                        <input  name="middleName" type="text" className={ModalStyle.forminput} value={formData.middleName} onChange={handleChange}/>
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="lastname" className={ModalStyle.formlabel}>Last name <span>*</span></label>
                        <input name="lastName" type="text" className={ModalStyle.forminput } value={formData.lastName} onChange={handleChange}/>
                        {errors.lastName &&(<div  className={ModalStyle.fielderrortext} >{errors.lastName}</div>)}
                    </div>
                </div>

                <div className={ModalStyle.formgroup}>
                    <label htmlFor="email" className={ModalStyle.formlabel}>Email <span>*</span></label>
                    <input  name="email" type="email" placeholder="name@example.com" className={ModalStyle.forminput} value={formData.email} onChange={handleChange} />
                    {errors.email &&(<div  className={ModalStyle.fielderrortext} >{errors.email}</div>)}
                </div>

                <div className={ModalStyle.formrowtwo}>
                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="phone" className={ModalStyle.formlabel}>Phone <span>*</span></label>
                        <input  name="phone" type="tel" placeholder="(555) 123456" className={ModalStyle.forminput} value={formData.phone} onChange={handleChange} />
                        {errors.phone &&(<div  className={ModalStyle.fielderrortext} >{errors.phone}</div>)}
                    </div>

                    <div className={ModalStyle.formgroup}>
                        <label htmlFor="altphone" className={ModalStyle.formlabel}>Alternate Phone</label>
                        <input name="alternatePhone" type="tel" placeholder="(555) 123456" className={ModalStyle.forminput} value={formData.alternatePhone} onChange={handleChange}/>
                        {errors.alternatePhone &&(<div  className={ModalStyle.fielderrortext} >{errors.alternatePhone}</div>)}
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