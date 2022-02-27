import { BsFillTrashFill } from "react-icons/bs";
const Contact = ({contacts,onDelete}) => {
    return ( 
        <div key={contacts.id}>
            <div>{contacts} </div>
            <button onClick={onDelete}><BsFillTrashFill/> </button>
        </div>
     );
}
 
export default Contact;