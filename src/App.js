import './App.css';
import { test } from './testObject'
import FeedbackCardContainer from './components/FeedbackCardContainer'
import PurchaseCardContainer from './components/PurchaseCardContainer'

const App = () => {
  return (
    <>
      <div className="font-Montserrat flex justify-center m-2 p-8">
        <div className='flex flex-col space-y-10'>
        <FeedbackCardContainer />
        <PurchaseCardContainer />
        </div>
      </div>
    </>
  )
}

export default App;
