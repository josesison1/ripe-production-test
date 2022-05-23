import './App.css';
import { test } from './testObject'
import FeedbackCardContainer from './components/FeedbackCardContainer'

const App = () => {
  const { surveyQuestions } = test
  return (
    <>
      <FeedbackCardContainer />
    </>
  )
}

export default App;
