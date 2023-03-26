import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "./Header";

export default function Resume() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <iframe
        style={{ width: "100vw", hight: "100vh" }}
        title="resume for Luke Gartland"
        src="https://lukes-resume.s3.us-west-2.amazonaws.com/Luke+Gartland+Resume.pdf"
      ></iframe>
    </div>
  );
}
