import React, { useState } from "react";
import axiosConfig from "../../../Helper/axiosConfig/axiosConfig";
import Spinner from "../../../Helper/Spinner/Spinner";

// css
import "../Actions.css";

const AddProjects = ({ setShowAddProjects }) => {
  // -------- STATE ----------
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    codelink: "",
    websitelink: "",
    projectimage: "",
  });

  // --------- loading state ----------
  const [loading, setLoading] = useState(false);

  // handle change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProjectDetails((prev) => ({ ...prev, [name]: value }));
  };

  // handle upload
  const handleUpload = (e) => {
    const reader = new FileReader();
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }

    reader.onload = () => {
      if (reader.readyState === 2) {
        setProjectDetails((prev) => ({ ...prev, projectimage: selectedFile }));
      }
    };
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, codelink, websitelink, projectimage } = projectDetails;

    try {
      setLoading(true);
      if (!title || !codelink || !websitelink || !projectimage) {
        console.log("error");
        return;
      }

      const formData = new FormData();
      formData.append("file", projectDetails.projectimage);
      formData.append("upload_preset", "portfolio_project_image");

      const upload = await axiosConfig.post(
        "https://api.cloudinary.com/v1_1/dfwa3kop9/image/upload",
        formData
      );

      const { data } = await axiosConfig.post("CreateProject", {
        ...projectDetails,
        projectimage: upload.data.url,
      });
      console.log(data);
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="actions_Container">
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* HEADER */}
        <h1>Add projects</h1>
        {/* INPUTS */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="codelink"
          placeholder="Code link"
          onChange={handleChange}
        />
        <input
          type="text"
          name="websitelink"
          placeholder="Website link"
          onChange={handleChange}
        />
        <input type="file" name="projectimage" onChange={handleUpload} />
        {/* FORM ACTIONS */}
        <section className="form_Actions">
          <button type="submit" className="add">
            {loading ? <Spinner /> : "Add"}
          </button>
          <button
            type="button"
            className="back"
            onClick={() => setShowAddProjects(false)}
          >
            Back
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddProjects;
