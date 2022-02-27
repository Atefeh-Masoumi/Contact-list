import { BsFillTrashFill } from "react-icons/bs";
import userprofile from '../img/userprofile.png';
const Contact = ({contacts,onDelete}) => {

    return ( 
        <div className="contact" key={contacts.id}>
            <img src={userprofile} alt="user"/>
        <div className="contactinfo">
            <p> name: {contacts.name}</p>    
            <p> email: {contacts.email}</p>
              
        </div>
            <button onClick={onDelete}><BsFillTrashFill style={{color:"red",cursor:"pointer",width:"1.5em",height:"1.5em"}}/> </button>
        </div>
     );
}
 
export default Contact;