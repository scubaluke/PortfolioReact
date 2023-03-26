import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Service from "./Service";
import "./MyServices.css";

export default function MyServices() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const renderServices = services.map((service) => (
    <Service key={service.key} title={service.title} body={service.body} />
  ));
  return (
    <section className="my-services" id="services">
      <h2
        data-aos="zoom-out"
        className="section__title section__title--services"
      >
        What I do
      </h2>
      <div className="services">{renderServices}</div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}

// const services = [
//   {
//     title: "Software Engineer",
//     body: "As a software engineer I design, develop, test, and maintain software applications and systems.",
//     key: 1,
//   },
//   {
//     title: "Constantly evolving",
//     body: `I am always experimenting, always learning and never bored.
//         I enjoy keeping up with and using the latest tools, technics and technology's.`,
//     key: 2,
//   },
//   {
//     title: "Web Development",
//     body: "Every website should be built with two goals. First it needs to work across all devices. second it needs to be as fast as possible.",
//     key: 3,
//   },
// ];

const services = [
  {
    title: "Design",
    body: "I work closely with other software engineers, project managers, and stakeholders to determine the requirements and scope of software projects. I create detailed designs and specifications for the software that meets these requirements.",
    key: 1,
  },
  {
    title: "Develop",
    body: `I write code and develop software applications using various programming languages and technologies, specializing in Node.js and TypeScript. 
    I also ensure that the software is efficient, reliable, and meets the project specifications`,
    key: 2,
  },
  {
    title: "Test",
    body: "I test the software to identify any bugs or issues that need to be addressed. I also write and execute test cases to ensure that the software is functioning as expected typically with Jest.",
    key: 3,
  },
];
