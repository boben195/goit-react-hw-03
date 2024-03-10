import { ImAccessibility } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";

import css from "../Contact/Contact.module.css";

const Contact = ({ data }) => {
  return (
    <div>
      <p>
        <ImAccessibility className={css.icons} />
        {data.username}
      </p>
      <p>
        <FaPhoneAlt className={css.icons} />
        {data.number}
      </p>
      <button className={css.del}>delete</button>
    </div>
  );
};

export default Contact;
