import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "@/components/common/header";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

const phoneRegex =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("Invalid email.").required("required"),
    contact: yup
        .string()
        .matches(phoneRegex, "Phone number is not valid.")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
});

export default function Form() {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const handleFormSubmit = (values: typeof initialValues) => {
        console.log(values);
    };

    return (
        <Box sx={{ padding: "0 16px" }}>
            <Header title="Create User" subtitle="Create a New User Profile" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            sx={{
                                display: "grid",
                                gap: "30px",
                                gridTemplateColumns:
                                    "repeat(4, minmax(0, 1fr))",
                                mt: "10px",
                                "& > div": {
                                    gridColumn: isNonMobile
                                        ? undefined
                                        : "span 4",
                                },
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="First Name"
                                helperText={
                                    touched.firstName && errors.firstName
                                }
                                name="firstName"
                                value={values.firstName}
                                error={
                                    !!touched.firstName && !!errors.firstName
                                }
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Last Name"
                                helperText={touched.lastName && errors.lastName}
                                name="lastName"
                                value={values.lastName}
                                error={!!touched.lastName && !!errors.lastName}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                helperText={touched.email && errors.email}
                                name="email"
                                value={values.email}
                                error={!!touched.email && !!errors.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contact Number"
                                helperText={touched.contact && errors.contact}
                                name="contact"
                                value={values.contact}
                                error={!!touched.contact && !!errors.contact}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 1"
                                helperText={touched.address1 && errors.address1}
                                name="address1"
                                value={values.address1}
                                error={!!touched.address1 && !!errors.address1}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Address 2"
                                helperText={touched.address2 && errors.address2}
                                name="address2"
                                value={values.address2}
                                error={!!touched.address2 && !!errors.address2}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "end",
                                mt: "20px",
                            }}
                        >
                            <Button
                                type="submit"
                                color="secondary"
                                variant="contained"
                            >
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
}
