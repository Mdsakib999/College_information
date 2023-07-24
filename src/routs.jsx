import { createBrowserRouter } from 'react-router-dom';
import Mainn from './Mainn';
import Home from './componant/Home';
import AllCollege from './componant/AllCollege';
import Login from './componant/Login';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainn></Mainn>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allColleges",
                element: <AllCollege></AllCollege>,
                loader: ()=> fetch('/collegeData.json')

            },
            {
                path: "/login",
                element: <Login></Login>
                
            }
        ]
    }
])