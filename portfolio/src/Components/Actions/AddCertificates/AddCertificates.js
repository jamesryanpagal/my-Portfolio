import React, { useState } from "react";
import axiosConfig from "../../../Helper/axiosConfig/axiosConfig";
import Spinner from "../../../Helper/Spinner/Spinner";

// css
import "../Actions.css";

const AddCertificates = ({ setShowAddCertificates }) => {
  // ------ STATE --------
  const [certificate, setCertificate] = useState("");

  // loading state
  const [loading, setLoading] = useState(false);

  // handle upload
  const handleUpload = (e) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onload = () => {
      if (reader.readyState === 2) {
        setCertificate(selectedFile);
      }
    };
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", certificate);
      formData.append("upload_preset", "portfolio_certificates");

      const upload = await axiosConfig.post(
        "https://api.cloudinary.com/v1_1/dfwa3kop9/image/upload",
        formData
      );

      const { data } = await axiosConfig.post("Certificates", {
        certificate: upload.data.url,
      });
      console.log(data);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="actions_Container">
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <h1>Add certificates</h1>
        {/* INPUTS */}
        <input type="file" name="certificateimage" onChange={handleUpload} />
        {/* FORM ACTIONS */}
        <section className="form_Actions">
          <button type="submit" className="add">
            {loading ? <Spinner /> : "Add"}
          </button>
          <button
            type="button"
            className="back"
            onClick={() => setShowAddCertificates(false)}
          >
            Back
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddCertificates;
