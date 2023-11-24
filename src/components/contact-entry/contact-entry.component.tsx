import { SetStateAction } from "react";
import styles from "./contact-entry.module.scss";

type ContactProps = {
  contact: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  };
  activeContact: number | null;
  setContact: React.Dispatch<SetStateAction<number | null>>;
};

const ContactEntry = ({ contact, activeContact, setContact }: ContactProps) => {
  const { id, firstname, lastname, email } = contact;
  const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase();

  return (
    <div
      className={[
        styles.contact,
        id === activeContact ? styles.active : "",
      ].join(" ")}
      onClick={() => setContact(id)}
    >
      <div className={styles.bubble}>
        <span>{initials}</span>
      </div>
      <div className={styles.details}>
        <div>
          {lastname}, {firstname}
        </div>
        <div>{email}</div>
      </div>
    </div>
  );
};

export default ContactEntry;
