import React from "react";
import { Formik } from "formik";
import ErrorValidate from "../ErrorValidate/ErrorValidate";
import { HandleSubmitContact, validationContact } from "../../utils/validationContact";
import AnimatedPage from "../AnimatedPage/AnimatedPage";
import { ToastContainer } from "react-toastify";
const Contact = () => {

    return (
        <AnimatedPage>
            <section className="flex justify-center items-center order">
                <div className="w-[90%] md:w-[30rem] flex mx-auto flex-col  items-center">
                    <h3 className='text-left w-full ml-2 my-8 text-xl'>Dejanos un mensaje</h3>
                    <Formik
                        initialValues={{
                            name: "",
                            email: "",
                            message: "",
                        }}

                        validate={validationContact}
                        onSubmit={HandleSubmitContact}


                    >
                        {({ values, errors, handleChange, handleSubmit, handleBlur }) => (
                            <form onSubmit={handleSubmit} className="ml-0 w-[90%] flex flex-col  ">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="mx-4">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name}
                                        className="my-3 rounded-2xl border-2 border-gray-200 p-1 px-3"
                                    />
                                    {errors.name && <ErrorValidate menssage={errors.name} />}
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="mx-4">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        className="my-3 rounded-2xl border-2 border-gray-200 p-1 px-3"
                                    />
                                </div>
                                {errors.email && <ErrorValidate menssage={errors.email} />}

                                <div className="flex flex-col">
                                    <label htmlFor="message" className="mx-4">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                        className="my-3 rounded-2xl border-2 border-gray-200 min-h-[6rem] px-3"
                                    ></textarea>
                                    {errors.message && <ErrorValidate menssage={errors.message} />}

                                </div>
                                <div className="mb-3 text-center my-3">
                                    <button

                                        type="submit"
                                        className="bg-[#00bcd4] p-4 rounded-2xl w-[50%] text-white hover:bg-[#0097a7] trasition-all duration-300 ease-in"
                                    >
                                        Enviar Mensaje
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
                <ToastContainer />
            </section>
        </AnimatedPage >
    );
};

export default Contact;
