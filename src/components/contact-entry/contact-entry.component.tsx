import { SetStateAction } from "react";

import { getInitials } from "../../utils/person.utils";

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

  return (
    <div
      className={[
        styles.contact,
        id === activeContact ? styles.active : "",
      ].join(" ")}
      onClick={() => setContact(id)}
    >
      <div className={styles.bubble}>
        <span>{getInitials(firstname, lastname)}</span>
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
