import { useQuiz } from "../contexts/QuestionsContext";
import Options from "./Options";

function Question() {
  const { question } = useQuiz();
  return (
    <div>
      <h4>{question ? question.question : ""}</h4>
      <Options />
    </div>
  );
}

export default Question;
