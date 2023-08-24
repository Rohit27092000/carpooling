import './App.css';
import Login from './Component/User/Login';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import UserRegister from './Component/User/UserRegister';
// import HomePageNav from './Component/HomePageNav';
//import PassengerPage from './Component/User/PassengerPage';
import UserHomePage from './Component/User/UserHomePage';
// import PassengerPage from './Component/User/PassengerPage';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import FindCar from './Component/FindCar';
import UserLogout from './Component/User/UserLogout';
import ProfilePage from './Component/User/ProfilePage';
import PassengerPage from './Component/User/PassengerPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path:"/SignUp",
    element: <UserHomePage />
  },
  {
    path: "/Register",
    element: <UserRegister />,
  },
  {
    path: '/ProfilePage',
    element: <ProfilePage />
  },
  {
    path: '/Logout',
    element: < UserLogout/>
  },
  {
    path: '/AboutUs',
    element: <AboutUs/>
  },
  {
    path: '/Home',
    element: <Home/>
  },
  {
    path: '/FindCar',
    element: <FindCar/>
  },
  {
    path:'/Edituser',
    element: <PassengerPage />
  }
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
