import { Link } from "react-router-dom";

const ContactDetail = ({location}) => {
    console.log(location.state.contacts);
    const {contacts} = location.state
    return (
        <div>
            <p>user name: {contacts.name} </p>
            <p>user email is: {contacts.email}</p>
            <Link to="/">Goto contact list</Link>
        </div>
      );
}
 
export default ContactDetail;