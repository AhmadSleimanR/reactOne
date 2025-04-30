import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  { name: "HTML", level: "beginner", color: "#f16529" },
  { name: "CSS", level: "beginner", color: "#2965f1" },
  { name: "JavaScript", level: "intermediate", color: "#f0db4f" },
  { name: "React", level: "advanced", color: "#61dafb" },
  { name: "Node.js", level: "advanced", color: "#68a063" },
  { name: "MongoDB", level: "advanced", color: "#4db33d" },
];

const emojis = {
  beginner: "👶",
  intermediate: "👍",
  advanced: "💪",
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <Data />
    </div>
  );
}

function Avatar() {
  return <img src="/ovakenshin.webp" alt="avatar" className="avatar" />;
}

function Data() {
  return (
    <div className="data">
      <h2>Ahmad Sleiman Romero</h2>
      <p>Full-stack web developer</p>
      <SkillList />
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.length > 0 ? (
        skills.map((skill) => (
          <Skill
            key={skill.name}
            name={skill.name}
            emoji={emojis[skill.level]}
            backgroundColor={{ backgroundColor: skill.color }}
          />
        ))
      ) : (
        <p>No skills found</p>
      )}
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={props.backgroundColor}>
      {props.name} {props.emoji}
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
