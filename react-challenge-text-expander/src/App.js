import { Children, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}
function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#3938BB",
  expanded = false,
  className = "",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const buttonStyle = {
    color: buttonColor,
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    font: "inherit",
    cursor: "pointer",
    display: "inline",
    textDecoration: "none",
  };

  const WordLimitedText = ({ children, collapsedNumWords, isExpanded }) => {
    const text = Children.toArray(children).join("");

    const words = text.trim().split(/\s+/);

    const needsTruncation = words.length > collapsedNumWords;
    const displayedWords =
      needsTruncation && !isExpanded
        ? words.slice(0, collapsedNumWords)
        : words;

    return (
      <>
        {displayedWords.join(" ")}
        {needsTruncation && !isExpanded && "..."}
      </>
    );
  };

  return (
    <div className={className}>
      <span>
        {WordLimitedText({ children, collapsedNumWords, isExpanded })}
      </span>
      <button style={buttonStyle} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}
