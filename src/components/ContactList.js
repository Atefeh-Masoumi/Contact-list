import Contact from "./Contact";

const ContactList = ({contacts,onDelete}) => {
    
    const contactrender=()=>{
        if (contacts.length === 0) return <p> please add a contact </p>

        return contacts.map(contacts=>{
                return <Contact key={contacts.id} onDelete={()=>onDelete(contacts.id)} contacts={contacts} />
            })
       
    }
    
    return <div className="contactlist">{contactrender()}</div>;
}
 
export default ContactList;