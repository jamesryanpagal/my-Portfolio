const mongoose = require("mongoose");
const schema = mongoose.Schema;

const certificatesSchema = new schema(
  {
    certificateimage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Certificates = mongoose.model("certificates", certificatesSchema);
module.exports = Certificates;
