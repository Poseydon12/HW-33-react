import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
    form.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Contact Name"
          className={s.field}
          required
        />
      </label>
      <label className={s.label}>
        Number:
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          className={s.field}
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
