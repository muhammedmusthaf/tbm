import mongoose from "mongoose";

const transportRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  material: { type: String, required: true },
  weight: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Transport =  mongoose.model("TransportRequest", transportRequestSchema);

export default Transport;
