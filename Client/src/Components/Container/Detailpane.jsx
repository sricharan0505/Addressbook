import Detailstyles from './detailpane.module.css'
import {useState} from 'react';

function Detailpane({selectedContact,onDelete,onEdit}){
    // const [selectedContact, setSelectedContact] = useState(null);
    return (

        <main className={Detailstyles.detailpane}>
            {selectedContact ? (
                <div className={Detailstyles.contactdetailcontainer}>
                    <div className={Detailstyles.detailheader}>
                        <div className={Detailstyles.detailprofileinfo}>
                            <div  className={Detailstyles.avatarlarge}>{selectedContact.firstName.charAt(0).toUpperCase()}</div>
                            <div className={Detailstyles.detailnamecontainer}> 
                                <h2  className={Detailstyles.detailfullname}>{selectedContact.firstName} {selectedContact.middleName} {selectedContact.lastName}</h2>
                                <span  className={Detailstyles.detailsubemail}>{selectedContact.email}</span>
                            </div>
                        </div>

                        <div className={Detailstyles.detailactions}>
                            <button  className={Detailstyles.btnsecondary} type="button" onClick={() => onEdit(selectedContact)}>
                                <svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                </svg>
                                Edit
                            </button>
                            <button  onClick={()=>onDelete(selectedContact.id)} className={Detailstyles.btndangericon} type="button" title="Delete contact">
                                <svg width="18" height="18" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={Detailstyles.detailcard}>
                        <div className={Detailstyles.detailrow} >
                            <div className={Detailstyles.detailrowiconcontainer}>
                                <svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                                </svg>
                            </div>
                            <div className={Detailstyles.detailrowcontent}>
                                <span className={Detailstyles.detailrowlabel}>Email</span>
                                <span  className={Detailstyles.detailrowvalue}>{selectedContact.email}</span>
                            </div>
                        </div>

                        <div className={Detailstyles.detailrow}>
                            <div className={Detailstyles.detailrowiconcontainer}>
                                <svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
                                </svg>
                            </div>
                            <div className={Detailstyles.detailrowcontent}>
                                <span className={Detailstyles.detailrowlabel}>Phone</span>
                                <span  className={Detailstyles.detailrowvalue}>{selectedContact.phone}</span>
                            </div>
                        </div>

                        <div className={Detailstyles.detailrow} >
                            <div className={Detailstyles.detailrowiconcontainer}>
                                <svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm228.5-51.5Q520-183 520-200t-11.5-28.5Q497-240 480-240t-28.5 11.5Q440-217 440-200t11.5 28.5Q463-160 480-160t28.5-11.5Z"/>
                                </svg>
                            </div>
                            <div className={Detailstyles.detailrowcontent}>
                                <span className={Detailstyles.detailrowlabel}>Alternate Phone</span>
                                <span  className={Detailstyles.detailrowvalue}>{selectedContact.alternatePhone}</span>
                            </div>
                        </div>

                        <div className={Detailstyles.detailrow} >
                            <div className={Detailstyles.detailrowiconcontainer}>
                                <svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M325-111.5q-73-31.5-127.5-86t-86-127.5Q80-398 80-480.5t31.5-155q31.5-72.5 86-127t127.5-86Q398-880 480.5-880t155 31.5q72.5 31.5 127 86t86 127Q880-563 880-480.5T848.5-325q-31.5 73-86 127.5t-127 86Q563-80 480.5-80T325-111.5ZM480-162q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/>
                                </svg>
                            </div>
                            <div className={Detailstyles.detailrowcontent}>
                                <span className={Detailstyles.detailrowlabel}>Website</span>
                                <span  className={Detailstyles.detailrowvalue}>{selectedContact.website}</span>
                            </div>
                        </div>

                        <div className={Detailstyles.detailrow} >
                            <div className={Detailstyles.detailrowiconcontainer}>
                                <svg width="16" height="16" viewBox="0 -960 960 960" fill="currentColor">
                                    <path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
                                </svg>
                            </div>
                            <div className={Detailstyles.detailrowcontent}>
                                <span className={Detailstyles.detailrowlabel}>Address</span>
                                <span  className={Detailstyles.detailrowvalue}>{selectedContact.address}</span>
                            </div>
                        </div>
                    </div>
                </div>)    : 
                (<div className={Detailstyles.detailsempty}>
                    <svg className={Detailstyles.detailicon} width="36" height="36" viewBox="0 -960 960 960" fill="currentColor">
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm100-95.5q47-15.5 86-44.5-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160q53 0 100-15.5ZM523-537q17-17 17-43t-17-43q-17-17-43-17t-43 17q-17 17-17 43t17 43q17 17 43 17t43-17Zm-43-43Zm0 360Z"/>
                    </svg>
                    <h2>No contact selected</h2>
                    <p>Choose a contact from the list,or add a new one to get started.</p>
                </div>)}
        </main>
    );

}

export default Detailpane