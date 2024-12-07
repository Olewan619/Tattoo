import styles from "./Contact.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <h1>Contacts</h1>
      <form>
        <input type="text" placeholder="Your name" />
        <textarea placeholder="Your message"></textarea>
        <button>Send</button>
      </form>
    </div>
  );
}
