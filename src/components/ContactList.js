import Contact from "./Contact";
import { Link } from "react-router-dom";
const ContactList = ({contacts,onDelete}) => {
        
    const contactrender=()=>{
        
        if (contacts.length === 0) return <p> please add a contact </p>

        return contacts.map(contacts=>{
                return <Contact key={contacts.id} onDelete={()=>onDelete(contacts.id)} contacts={contacts} />
            })
       
    }
    
    return <div className="contactlist">
        <div>
         <h2>Contacts</h2>
         <Link to="/add">
            <button>Add</button>
         </Link>
        </div>
        
        {contactrender()}
        </div>;
}
 
export default ContactList;