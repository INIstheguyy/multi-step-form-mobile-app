
import { useState } from 'react';
import BackgroundLayout from './components/BackGround';
import Button1 from './components/Button0ne';
import Button0 from './components/ButtonMiddle';
import './index.css';
import FirstSlide from './pages/FirstSlide'
import SecondSlide from './pages/SecondSlide'
import ThirdSlide from './pages/ThirdSlide'


function App() {
  const [page, setPage] = useState(1)

  return (
    <BackgroundLayout 
    children={    <div>
      {page === 1 && <FirstSlide />}
      {page === 2 && <SecondSlide/>}
      {page === 3 && <ThirdSlide/>}
    </div>}
    button={
      <div>
      {page === 1 && <Button1 nextPage={() => setPage(page + 1)}/>}
      {(page === 2 || page === 3) && <Button0 nextPage={() => setPage(page + 1)} PreviousPage={() => setPage(page - 1)}/>}
      </div>
    }
  />
  );
}

export default App;
