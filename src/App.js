import './App.css';
import Login from './Component/User/Login';
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import UserRegister from './Component/User/UserRegister';
// import HomePageNav from './Component/HomePageNav';
//import PassengerPage from './Component/User/PassengerPage';
// import PassengerPage from './Component/Passenger/PassengerPage';
import AboutUs from './Component/AboutUs';
import Home from './Component/Home';
import FindCarLogin from './Component/FindCarLogin';
import FindCar from './Component/Passenger/FindCar';
import PassengerLogout  from './Component/Passenger/PassengerLogout';
// import CarOwnerHomePage from './Component/CarOwner/CarOwnerHomePage';
// import PassengerHomePage from './Component/Passenger/PassengerHomePage';
import CarRegister from './Component/CarOwner/CarRegister';
import CarOwnerAccount from './Component/CarOwner/CarOwnerAccount';
import CarOwnerLogout from './Component/CarOwner/CarOwnerLogout';
import HomeP from './Component/Passenger/HomeP';
import AboutUsP from './Component/Passenger/AboutUsP';
import PassengerDetails from './Component/Passenger/PassengerDetails';
import HomeC from './Component/CarOwner/HomeC';
import AboutUsC from './Component/CarOwner/AboutUsC';
import TripCreate from './Component/Trip/TripCreate';
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
    path:"/LoginAsPassenger",
    element: <HomeP />,
  },
  {
    path: "/LoginAsCarOwner",
    element: <HomeC />
  },
  {
    path: "/Register",
    element: <UserRegister />,
  },
  {
    path: '/PassengerDetails',
    element: <PassengerDetails />,
  },
  {
    path: '/PassengerLogout',
    element: <PassengerLogout />
  },
  {
    path: '/CarOwnerLogout',
    element: <CarOwnerLogout />
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
    element: <FindCar />
  },
  {
    path: '/FindCarLogin',
    element :<FindCarLogin />
  },
  {
    path: '/CarRegister',
    element: <CarRegister />,
  },
  {
    path: '/CarOwnerAccount',
    element: <CarOwnerAccount />,
  },
  {
    path: '/HomeP',
    element: <HomeP />
  },
  {
    path: '/HomeC',
    element: <HomeC />
  },
  {
    path :'/AboutUsP',
    element : <AboutUsP />
  },
  {
    path: '/HomeP',
    element :<HomeC/>
  },
  {
    path: '/AboutUsC',
    element : <AboutUsC />
  },
  {
    path: '/CreateTrip',
    element : <TripCreate />
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
