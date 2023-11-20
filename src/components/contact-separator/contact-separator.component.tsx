import styles from "./contact-separator.module.scss";

type ContactSeparatorProps = {
  letter: string;
};

const ContactSeparator = ({ letter }: ContactSeparatorProps) => {
  return (
    <div className={styles.separator}>
      <span>{letter}</span>
    </div>
  );
};

export default ContactSeparator;
