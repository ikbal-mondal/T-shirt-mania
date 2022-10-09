import './App.css';
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Grandpa from './Grandpa/Grandpa';

function App() {

  const router = createBrowserRouter([
  
    {
      path:'/' ,
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader: () =>  fetch('tshirts.json'),
          element: <Home
          
          ></Home>
        },
        {

          path:'/order',
          element: <Orders></Orders>
        },
        {
          path:'/grandpa',
          element: <Grandpa></Grandpa>
        }

      ]
    }

    
  ])
  return (
    
    <div className="App">
     
     <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
