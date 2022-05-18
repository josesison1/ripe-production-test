import './App.css';
import { test } from './testObject'
import FeedbackCardContainer from './components/FeedbackCardContainer'

const App = () => {
  const { surveyQuestions } = test
  console.log(surveyQuestions)
  return (
    <>
    <h1>Hello World!</h1>
    {test.customerNme}
    {surveyQuestions.map(v => v.surveyQuestion)}
    <FeedbackCardContainer />
    </>
  )
}

export default App;
