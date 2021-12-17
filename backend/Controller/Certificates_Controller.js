// ------------ MODEL ---------------
const Certificates = require("../Model/Certificates_Model");

// Create certificates
const certificateController = async (req, res) => {
  const { certificate } = req.body;
  try {
    const create = await Certificates.create({
      certificateimage: certificate,
    });
    res.json(create);
  } catch (error) {
    res.json(error.message);
  }
};

// Get certificates
const getCertificates = async (req, res) => {
  try {
    const cert = await Certificates.find();
    res.json(cert);
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = { certificateController, getCertificates };
