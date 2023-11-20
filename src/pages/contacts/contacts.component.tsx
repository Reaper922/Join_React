import { useState } from "react";

import Contact from "../../components/contact/contact.component";
import ContactSeparator from "../../components/contact-separator/contact-separator.component";

import styles from "./contacts.module.scss";

const contacts = [
  {
    id: 1,
    lastname: "Ammen",
    firstname: "Dennis",
    email: "dennisammen@gmail.com",
  },
  {
    id: 2,
    lastname: "Müller",
    firstname: "Maria",
    email: "mariamueller@gmail.com",
  },
  {
    id: 3,
    lastname: "Janßen",
    firstname: "Sven",
    email: "svenjanssen@gmail.com",
  },
];

const Contacts = () => {
  const [activeContact, setActiveContact] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      <section className={styles.contacts}>
        <ContactSeparator letter={"A"} />
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            activeContact={activeContact}
            setContact={setActiveContact}
          />
        ))}
      </section>
      <section className={styles.details}>Details</section>
    </div>
  );
};

export default Contacts;
