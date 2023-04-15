
import { useState } from 'react';
import BackgroundLayout from './components/BackGround';
import Button1 from './components/Button0ne';
import Button10 from './components/ButtonLast';
import Button0 from './components/ButtonMiddle';
import './index.css';
import FirstSlide from './pages/FirstSlide'
import SecondSlide from './pages/SecondSlide'
import ThirdSlide from './pages/ThirdSlide'
import FourthSlide from './pages/FourthSlide';


function App() {
  const [page, setPage] = useState(1)
  const [planType, setPlanType] = useState("monthly")
  const [isFormValid, setIsFormValid] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);
 
  return (
    <BackgroundLayout 
    currentPage={page}
    children={<div>
      {page === 1 && <FirstSlide  isFormValid={isFormValid} setIsFormValid={setIsFormValid} />}
      {page === 2 && <SecondSlide planType={planType} setPlanType={setPlanType} />}
      {page === 3 && <ThirdSlide setSelectedPlan={setSelectedPlan} setSelectedAddons={setSelectedAddons} />}
      {page === 4 && <FourthSlide selectedPlan={selectedPlan} selectedAddons={selectedAddons} />}
    </div>}
    button={
      
      <div>
      {page === 1 && <Button1 nextPage={() => {setPage(page + 1) }}  isFormValid={isFormValid} />}
      {(page === 2 || page === 3) && <Button0 nextPage={() => setPage(page + 1)} PreviousPage={() => setPage(page - 1) } />}
      {(page === 4 ) && <Button10 nextPage={() => setPage(page + 1)} PreviousPage={() => setPage(page - 1)} />}
      </div>
    }
  />
  );
}

export default App;
