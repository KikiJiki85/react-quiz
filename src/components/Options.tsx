import { Action, QuestionType } from './App';

interface OptionsProps {
  question: QuestionType;
  dispatch: (action: Action) => void;
  answer: number | null;
}

function Options({ question, dispatch, answer }: OptionsProps) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options?.map((option, i) => {
        return (
          <button
            className={`btn btn-option ${i === answer ? 'answer' : ''} ${
              hasAnswered
                ? i === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={i}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: 'newAnswer', payload: i })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
