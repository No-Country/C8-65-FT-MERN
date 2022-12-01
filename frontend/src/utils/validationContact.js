import axios from "axios";

export const validationContact = (values) => {
  let error = {};
  const regExMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (values.name.trim() === "") {
    error.name = "Ingresa un nombre";
  } else if (!/[A-Z]{3,10}$/i.test(values.name)) {
    error.name =
      "El nombre debe contener solo letras, tener minimo 3 y maximo 10 caracteres";
  }

  if (values.email === "") {
    error.email = "Ingresa un email";
  } else if (!regExMail.test(values.email)) {
    error.email = "Correo invalido";
  }
  if (values.menssagge.length < 10) {
    error.menssagge = "El mensaje debe tener minimo 10 caracteres";
  } else if (values.menssagge.length > 500) {
    error.menssagge = "EL mensaje debe tenet maximo 500 caracteres";
  }
  return error;
};

export const HandleSubmitContact = async (values) => {
  const UserMenssage = {
    name: values.name,
    email: values.email,
    menssagge: values.menssagge,
  };
  //   axios.post();
  console.log(UserMenssage);
};
