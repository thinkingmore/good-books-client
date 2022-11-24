import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/Routes/Routes/Routes';

function App() {
  return (
      <RouterProvider router={router} >

      </RouterProvider>
  );
}

export default App;
