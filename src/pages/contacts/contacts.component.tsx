import { useEffect, useState } from "react";

import Button from "../../components/button/button.component";
import ContactEntry from "../../components/contact-entry/contact-entry.component";
import ContactDetails from "../../components/contact-details/contact-details.component";
import ContactSeparator from "../../components/contact-separator/contact-separator.component";

import AddContact from "@assets/icons/add_contact.svg?react";

import { Contact } from "../../types/contact.type";

import styles from "./contacts.module.scss";

const contacts: Contact[] = [
  {
    id: 1,
    firstname: "Dennis",
    lastname: "Ammen",
    email: "dennisammen@gmail.com",
    phone: "+49 123456789",
  },
  {
    id: 2,
    firstname: "Maria",
    lastname: "Müller",
    email: "mariamueller@gmail.com",
    phone: "+49 123965478",
  },
  {
    id: 3,
    firstname: "Sven",
    lastname: "Janßen",
    email: "svenjanssen@gmail.com",
    phone: "+49 1239456780",
  },
];

const Contacts = () => {
  const [activeContact, setActiveContact] = useState<number | null>(null);
  const [displayedContact, setDisplayedContact] = useState<Contact | undefined>(
    undefined
  );

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     fetch("https://randomuser.me/api/?seed=e69088fab65d2fd9&results=20")
  //       .then((resp) => resp.json())
  //       .then((data) => console.log(data));
  //   };

  //   fetchUser();
  // }, []);

  useEffect(() => {
    const contact: Contact | undefined = contacts.find(
      (cont) => cont.id === activeContact
    );

    setDisplayedContact(contact);
  }, [activeContact]);

  return (
    <div className={styles.container}>
      <section className={styles.contacts}>
        <Button style="primary">
          <span>Add Contact</span>
          <AddContact />
        </Button>
        <ContactSeparator letter={"A"} />
        {contacts.map((contact) => (
          <ContactEntry
            key={contact.id}
            contact={contact}
            activeContact={activeContact}
            setContact={setActiveContact}
          />
        ))}
      </section>
      <section className={styles.details}>
        {displayedContact && (
          <ContactDetails displayedContact={displayedContact} />
        )}
      </section>
    </div>
  );
};

export default Contacts;
