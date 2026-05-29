import { useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/contactsSlice";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        {contact.name}: <span className={s.number}>{contact.number}</span>
      </p>
      <button className={s.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;