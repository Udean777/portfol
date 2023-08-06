const { Schema, default: mongoose } = require("mongoose");

const contactSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Your name is required mate"],
    trim: true,
    minLength: [
      2,
      "It doesn't make senses your name is less than 2 letters mate, give me your fullname",
    ],
    maxLength: [
      60,
      "Ok, it doesn't make senses if your name is longer than 60 mate",
    ],
  },
  email: {
    type: String,
    required: [true, "Your email is required too mate"],
    match: [
      /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      "Your email address is invalid mate",
    ],
  },
  message: {
    type: String,
    required: [true, "Left a message for me mate"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
