import Contact from "./Contact";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCntc } from "../Services/GetService";
import { deleteOneContact } from "../Services/DeleteContact";
const ContactList = (props) => {
    const [contacts, setContacts] = useState([]);
    const [Allcontacts, Setallcontacts]=useState(null);
    const [searchitem, setSearchitem] = useState("");
    useEffect(()=>{
        //    const savestorage = JSON.parse(localStorage.getItem(contacts));
        //    if (savestorage) setContacts(savestorage);
        const getContacts= async ()=>{
            const {data}= await getCntc();
            setContacts(data);
            Setallcontacts(data);
           
        };
        try {
            
        getContacts();
            
        } catch (error) {}  
        },[]);   
       

        const deleteContact=async(id)=>{
            try {
                
                await deleteOneContact(id);
                const delContact = contacts.filter((c)=>c.id !== id);
                setContacts(delContact);
            } catch (error) {
                
            }
        }
    const contactrender=()=>{
        
        if (contacts.length === 0) return <p> please add a contact </p>

        return contacts.map(contacts=>{
                return <Contact key={contacts.id} onDelete={()=>deleteContact(contacts.id)} contacts={contacts} />
            })
        }

        
    const searchHandler =(e)=>{
        setSearchitem(e.target.value);
        const search = e.target.value;
        if(search!==""){
            const filteredContacts = Allcontacts.filter((c)=>{
                return Object.values(c).join("").toLowerCase().includes(search.toLowerCase());
            })
            setContacts(filteredContacts);
    
        }else {setContacts(Allcontacts)}
    }
    
    return <div className="contactlist">
        <div >
         <h2>Contacts</h2>
         <Link to="/add">
            <button>Add</button>
         </Link>
         <input type="text" value={searchitem} placeholder="Search" onChange={searchHandler}/>
        </div>
        
        {contactrender()}
    </div>
    
}
 
export default ContactList;