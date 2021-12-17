const router = require("express").Router();

// Controller
const {
  certificateController,
  getCertificates,
} = require("../Controller/Certificates_Controller");

router.route("/").post(certificateController);

router.route("/getCertificates").get(getCertificates);

module.exports = router;
