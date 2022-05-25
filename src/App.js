import './App.css';
import { test } from './testObject'
import FeedbackCardContainer from './components/FeedbackCardContainer'
import PurchaseCardContainer from './components/PurchaseCardContainer'

const App = () => {
  const { surveyQuestions } = test
  return (
    <>
      <div className="flex flex-col space-y-10">
        <FeedbackCardContainer />
        <PurchaseCardContainer />
      </div>
    </>
  )
}

export default App;
