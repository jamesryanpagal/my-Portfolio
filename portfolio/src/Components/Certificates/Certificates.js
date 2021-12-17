import React, { useState, useEffect } from "react";
import axiosConfig from "../../Helper/axiosConfig/axiosConfig";

// images
import achievmentsImage from "../../Images/achievments.webp";

// css
import "./Certificates.css";

const Certificates = () => {
  // ------------ STATE -----------
  const [certificates, setCertificates] = useState([]);

  // Get certificates
  useEffect(() => {
    const getCertificates = async () => {
      const { data } = await axiosConfig.get("Certificates/getCertificates");
      setCertificates([...data]);
    };

    getCertificates();
  }, []);

  return (
    <div className="certificates_Container" id="Certificates">
      {/* CERTIFICATES IMAGE CONTAINER */}
      <section data-aos="fade-right" className="certificatesImage_Container">
        <h1>Certificates</h1>
        <img src={achievmentsImage} alt="" />
      </section>
      {/* CERTIFICATES */}
      <section className="certificatesDetails_Container">
        {certificates.map((certificate, i) => {
          return (
            <section key={i} data-aos="fade-left" className="certificate">
              <img src={certificate.certificateimage} alt="" />
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Certificates;
