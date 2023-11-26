import { Contact } from "../../types/contact.type";

import EditIcon from "@assets/icons/edit.svg?react";
import DeleteIcon from "@assets/icons/delete.svg?react";

import styles from "./contact-details.module.scss";

type ContactDetailsProps = {
  displayedContact: Contact;
};

const ContactDetails = ({ displayedContact }: ContactDetailsProps) => {
  const { firstname, lastname, email, phone } = displayedContact;
  const initials = (firstname.charAt(0) + lastname.charAt(0)).toUpperCase();

  return (
    <div className={styles.container}>
      <div className={styles.detailsHeader}>
        <div className={styles.bubble}>
          <span>{initials}</span>
        </div>
        <div>
          <h2>
            {firstname} {lastname}
          </h2>
          <div className={styles.actionContainer}>
            <div className={styles.action}>
              <EditIcon />
              <span>Edit</span>
            </div>
            <div className={styles.action}>
              <DeleteIcon />
              <span>Delete</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <h3>Contact Information</h3>
        <div className={styles.info}>
          <span>
            <b>Email:</b>
          </span>
          <a href={`mailto:${email}`} draggable="false">
            {email}
          </a>
        </div>
        <div className={styles.info}>
          <span>
            <b>Phone:</b>
          </span>
          <a href={`tel:${phone}`} draggable="false">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
