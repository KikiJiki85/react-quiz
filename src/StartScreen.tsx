interface StartScreenProps {
  numberOfQuestions: number;
}

function StartScreen({ numberOfQuestions }: StartScreenProps) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numberOfQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Start now!</button>
    </div>
  );
}

export default StartScreen;
