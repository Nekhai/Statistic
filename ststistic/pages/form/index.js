import {Formik, Form, Field, ErrorMessage} from "formik";
import { object, string, ref } from 'yup';
import styles from "../../styles/Form.module.css"

const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
};

const validationSchema = object().shape({
    name: string()
        .required("Required")
        .min(3, "To short")
        .max(10, "To long"),
    email: string()
        .required("Required")
        .email("Not valid email"),
    password: string()
        .required("Required")
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
        .matches(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/, getCharacterValidationError("special character"))
        .min(8, "To short"),
    confirmPassword: string()
        .required("Required")
        .oneOf([ref("password")], "Passwords does not match"),
})

export default function FormPage() {
    return <div className={styles.container}>
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={values=> alert(JSON.stringify(values, null, 2))}
        >
            {() => (
                    <Form className={styles.form}>
                        <label>Name</label>
                        <Field name="name" type="text" className={styles.input}/>
                        <ErrorMessage name="name" component="div" className={styles.error}/>

                        <label>Email</label>
                        <Field name="email" type="email" className={styles.input}/>
                        <ErrorMessage name="email" component="div" className={styles.error}/>

                        <label>Password</label>
                        <Field name="password" type="password" className={styles.input}/>
                        <ErrorMessage name="password" component="div" className={styles.error}/>

                        <label>Confirm password</label>
                        <Field name="confirmPassword" type="password" className={styles.input}/>
                        <ErrorMessage name="confirmPassword" component="div" className={styles.error}/>

                        <button type="submit">Submit</button>
                    </Form>
                )
            }
        </Formik>
    </div>
}