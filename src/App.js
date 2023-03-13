import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes';

function App() {
  return (
    <div className='m-auto max-w-[1200px]'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
