import React from "react";
import Image from "next/image";
import resumeImg from "../public/resume.png";

const certs = [
  { cert: "Security +" },
  { cert: "SentinelOne +" },
  { cert: "Lets Defend" },
  { cert: "Proofpoint" },
];
const skills = [
  { skill: "Threat Hunting" },
  { skill: "Phishing" },
  { skill: "Security Auditing" },
  { skill: "Cyber Security Training" },
  { skill: "Log analysis" },
  { skill: "SentinelOne" },
  { skill: "Security" },
  { skill: "Networking" },
  { skill: "Rapid7" },
  { skill: "Duo" },
  { skill: "MLL models" },
  { skill: "bash" },
  { skill: "Linux" },
  { skill: "Kali" },
  { skill: "Microsoft" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node.js" },
  { skill: "OpenSSL" },
  { skill: "Numpy" },
  { skill: "Git" },
  { skill: "MySQL" },
  { skill: "Jupyter Notebooks" },
  { skill: "Virtualbox" },
  { skill: "Firebase" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Resume
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Kevin and I am an{" "}
              <span className="font-bold">
                Information Security Certified Professional
              </span>{" "}
              who has been in the field since October of 2022, gaining valuable
              experience in cybersecurity. I am based in Brooklyn, NY. Currently
              pursuing a BS in Computer Science at City College Grove School of
              Engineering, anticipated to be completed in May 2024. I consider
              myself to be deeply committed to my goals, striving with{" "}
              <span className="font-bold">dedication</span>,{" "}
              <span className="font-bold">self-motivation</span>, and{" "}
              <span className="font-bold">determination</span> in my pursuit of
              excellence in the field of cybersecurity. Alongside my passion for
              information security, I actively engage in security research,
              further honing my expertise to stay ahead of emerging threats.
              Additionally, I find joy in hobbies such as gaming, chess, and
              expressing my creativity through various art forms. My journey in
              the cybersecurity realm began just under a year ago, and in that
              time, I have continually expanded my skills and knowledge to
              tackle challenges in this ever-evolving domain. I am dedicated to
              utilizing my expertise to protect and defend digital assets,
              contributing to a safer digital landscape.
            </p>

            <br />
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={resumeImg} alt="Resume" width={400} height={600} />
            </a>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <h1
              className="text-2xl font-bold mb-6"
              style={{ marginTop: "50px" }}
            >
              My Certifications
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {certs.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.cert}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
