import React, { useState } from "react";
import axiosConfig from "../../../Helper/axiosConfig/axiosConfig";
import Spinner from "../../../Helper/Spinner/Spinner";

// css
import "../Actions.css";

const AddSkills = ({ setShowAddSkills }) => {
  // --------- STATE -----------
  const [skill, setSkill] = useState("");

  // loading state
  const [loading, setLoading] = useState(false);

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axiosConfig.post("Skills", { skill });
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
        <h1>Add skills</h1>
        {/* INPUTS */}
        <input
          type="text"
          name="skill"
          placeholder="Skill"
          onChange={(e) => setSkill(e.target.value)}
        />
        {/* FORM ACTIONS */}
        <section className="form_Actions">
          <button type="submit" className="add">
            {loading ? <Spinner /> : "Add"}
          </button>
          <button
            type="button"
            className="back"
            onClick={() => setShowAddSkills(false)}
          >
            Back
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddSkills;
