import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    avatar: {type: String},
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }]
  });

export default mongoose?.models?.User || mongoose.model("User", UserSchema)