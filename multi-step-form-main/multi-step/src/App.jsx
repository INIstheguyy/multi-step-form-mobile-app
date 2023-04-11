
import { useState, useEffect } from 'react';
import BackgroundLayout from './components/BackGround';
import Button1 from './components/Button0ne';
import Button10 from './components/ButtonLast';
import Button0 from './components/ButtonMiddle';
import './index.css';
import FirstSlide from './pages/FirstSlide'
import SecondSlide from './pages/SecondSlide'
import ThirdSlide from './pages/ThirdSlide'


function App() {
  const [page, setPage] = useState(1)
  const [planType, setPlanType] = useState("monthly")
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
 
  const checkFormCompletion = (isComplete) => {
    setIsButtonDisabled(!isComplete);
  };

  return (
    <BackgroundLayout 
    currentPage={page}
    children={<div>
      {page === 1 && <FirstSlide  checkFormCompletion={checkFormCompletion} />}
      {page === 2 && <SecondSlide planType={planType} setPlanType={setPlanType} />}
      {page === 3 && <ThirdSlide/>}
    </div>}
    button={
      
      <div>
      {page === 1 && <Button1 nextPage={() => {setPage(page + 1) }}  disable={isButtonDisabled} />}
      {(page === 2 || page === 3) && <Button0 nextPage={() => setPage(page + 1)} PreviousPage={() => setPage(page - 1) } />}
      {(page === 4 ) && <Button10 nextPage={() => setPage(page + 1)} PreviousPage={() => setPage(page - 1)} />}
      </div>
    }
  />
  );
}

export default App;
