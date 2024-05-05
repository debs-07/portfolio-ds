"use client";

// Internal dependencies
import WebExperiance from "./web";
import MobileExperiance from "./mobile";

const experiances = [
  {
    years: "2021 - Present",
    headers: [
      "Associate Software Engineer II - Highradius",
      "Associate Software Engineer I",
      "Software Intern",
    ],
    description: `Built highly scalable and high-quality user interfaces. 
     Evaluated requirements in accordance with inputs from PM and UX teams.
     Formulated technical designs for a range of user stories and
     augmented existing features to improve functionality in the Autonomous Accounting platform`,
    skills: [
      "ReactJS",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Material UI",
      "Java",
      "SpringBoot",
      "MySQL",
    ],
  },
];

const Experiance = () => (
  <>
    <WebExperiance experiances={experiances} />
    <MobileExperiance experiances={experiances} />
  </>
);

export default Experiance;
