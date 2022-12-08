import axios from "axios";
import { toast } from "react-toastify";

export const validationContact = (values) => {
  let error = {};
  const regExMail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (values.name.trim() === "") {
    error.name = "Ingresa un nombre";
  } else if (!/[A-Z]{3,5}$/i.test(values.name)) {
    error.name =
      "El nombre debe contener solo letras, tener minimo 3 y maximo 10 caracteres";
  }

  if (values.email === "") {
    error.email = "Ingresa un email";
  } else if (!regExMail.test(values.email)) {
    error.email = "Correo invalido";
  }
  if (values.message.trim() === "") {
    error.message = "Ingresa un mensaje";
  } else if (values.message.trim().length < 10) {
    error.message = "El mensaje debe tener minimo 10 caracteres";
  } else if (values.message.trim().length > 500) {
    error.message = "EL mensaje debe tenet maximo 500 caracteres";
  }
  return error;
};

export const HandleSubmitContact = async (values, onSubmitProps) => {
  const UserMessage = {
    name: values.name,
    email: values.email,
    message: values.message.trim(),
  };
  onSubmitProps.resetForm();
  const already = JSON.parse(sessionStorage.getItem("tokenForm"));
  if (already === 3) {
    return toast.error("Ya ha enviado muchos mensajes vuelva más tarde");
  }
  try {
    await axios.post("/api/message/send", UserMessage);
    sessionStorage.setItem("tokenForm", JSON.stringify(already + 1));
    toast.success("Mensaje Enviado");
  } catch (error) {
    toast.error(error);
  }
};
