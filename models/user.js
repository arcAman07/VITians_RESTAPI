const path = require("path");
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const mongoose = require("mongoose");
const { Schema } = mongoose;
// Some changes need to be made in the schema ( make in unique and regex will be applied )
const userSchema = new Schema({
  name: { type: "string", required: true },
  dob: { type: "string", required: true },
  regNo: { type: "string", required: true },
  hashReg: { type: "string", required: true },
});

module.exports = userSchema;
