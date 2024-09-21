import { Action, QuestionType } from './App';

interface OptionsProps {
  question: QuestionType;
  dispatch: (action: Action) => void;
  answer: number | null;
}

function Options({ question, dispatch, answer }: OptionsProps) {
  return (
    <div className="options">
      {question.options?.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? 'answer' : ''} ${
            answer && (i === question.correctOption ? 'correct' : 'wrong')
          }`}
          key={option}
          disabled={!!answer}
          onClick={() => dispatch({ type: 'newAnswer', payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
