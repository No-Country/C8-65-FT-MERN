import express from "express";
import Message from "../models/messageModel.js";
const messageRouter = express.Router();

messageRouter.get("/get", async (req, res) => {
  try {
    const getMessages = await Message.find();
    res.send({ status: "Ok", data: getMessages });
  } catch (error) {
    res
      .status(error?.status || 400)
      .send({ status: "FAILED", data: { error: error?.menssage || error } });
  }
});

messageRouter.post("/send", async (req, res) => {
  const { body } = req;
  const message = new Message({
    name: body.name,
    email: body.email,
    message: body.message,
  });
  try {
    const newMessage = await message.save();
    res.status(200).send({ status: "OK", data: newMessage });
  } catch (error) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error: "Ha ocurrido un error con el servidor, intente más tarde",
      },
    });
  }
});

export default messageRouter;
