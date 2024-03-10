import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";

import css from "../ContactForm/ContactForm.module.css";

// const FeedbackSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   number: Yup.string()
//     .email("Must be a valid like 111-11-11!")
//     .required("Required"),
// });

const initialValues = {
  username: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    onAdd({
      id: Date.now(),
      username: e.target.elements.username.value,
      number: e.target.elements.number.value,
    });
    e.target.reset;
  };

  return (
    <Formik
      // validationSchema={FeedbackSchema}
      initialValues={initialValues}
      // onSubmit={handleSubmit}
    >
      <Form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>Name</label>
        <Field
          className={css.field}
          placeholder="enter name"
          type="text"
          name="username"
        />
        <label className={css.label}>Number</label>
        <Field
          className={css.field}
          placeholder="123-45-67"
          type="tel"
          name="number"
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
