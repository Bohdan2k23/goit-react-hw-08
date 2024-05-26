import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {visibleContacts &&
          Array.isArray(visibleContacts) &&
          visibleContacts.length > 0 &&
          visibleContacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
      </ul>
    </div>
  );
}
