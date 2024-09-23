import { Action } from './App';

interface NextButtonProps {
  dispatch: (action: Action) => void;
  answer: number | null;
}

function NextButton({ dispatch, answer }: NextButtonProps) {
  return (
    <>
      {answer !== null && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: 'nextQuestion' })}
        >
          Next
        </button>
      )}
    </>
  );
}

export default NextButton;
