const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageUrl: { type: String, default: null },
    securityQuestion: { type: String, default: null },
    securityAnswer: { type: String, default: null }, // stored hashed
  },
  {
    timestamps: true,
  }
);

//Hash Password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//Compare Password
UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

//Hash security answer before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("securityAnswer") || !this.securityAnswer) return next();
  this.securityAnswer = await bcrypt.hash(
    this.securityAnswer.trim().toLowerCase(),
    10
  );
  next();
});

//Compare Security Answer
UserSchema.methods.compareSecurityAnswer = async function (candidateAnswer) {
  return await bcrypt.compare(
    candidateAnswer.trim().toLowerCase(),
    this.securityAnswer
  );
};

module.exports = mongoose.model("User", UserSchema);
