import { Action } from './App';

interface StartScreenProps {
  numberOfQuestions: number;
  dispatch: (action: Action) => void;
}

function StartScreen({ numberOfQuestions, dispatch }: StartScreenProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'start' })}
      >
        Start now!
      </button>
    </div>
  );
}

export default StartScreen;
