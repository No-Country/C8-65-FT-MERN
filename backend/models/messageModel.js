import mongoose from "mongoose";

const messaggeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Message = mongoose.model("Message", messaggeSchema);

export default Message;
