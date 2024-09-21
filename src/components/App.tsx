import { useEffect, useReducer } from 'react';
import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';

export interface QuestionType {
  question?: string;
  options?: string[];
  correctOption?: number;
  points?: number;
}

type Status = 'loading' | 'error' | 'ready' | 'active' | 'finished';

export type Action =
  | { type: 'dataReceived'; payload: QuestionType[] }
  | { type: 'dataFailed' }
  | { type: 'start' };

interface State {
  questions: QuestionType[];
  status: Status;
  index: number;
}

const initialState: State = {
  questions: [],
  status: 'loading',
  index: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };
    case 'dataFailed': {
      return { ...state, status: 'error' };
    }
    case 'start': {
      return { ...state, status: 'active' };
    }
    default:
      return state;
  }
}

function App() {
  const [{ questions, index, status }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch('http://localhost:8000/questions');
        const data = await res.json();
        dispatch({ type: 'dataReceived', payload: data });
      } catch (err) {
        dispatch({ type: 'dataFailed' });
        console.error(err);
      }
    }
    getData();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numberOfQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
