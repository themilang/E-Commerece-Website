// import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <>
    <div className='flex flex-row justify-center bg-black text-white'>
    <Navigation/>
   
    </div>

    
    <HomePage/>
    <div>
    
     
    </div>
    </>
  );
}

export default App;
