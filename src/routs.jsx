import { createBrowserRouter } from 'react-router-dom';
import Mainn from './Mainn';
import Home from './componant/Home';
import AllCollege from './componant/AllCollege';
import Login from './componant/Login';
import CollegeDetails from './componant/collegeDetails';
import Register from './componant/Register';
import PrivateRoute from './componant/PrivateRoute';


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
                path: "/collegeDetails/:clgId",
                element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
                loader: async({params}) => {
                    const res = await fetch(`/collegeData.json`)
                    const data = await res.json()
                    const single = data.find(detail => detail.id == params.clgId)
                    return single;
                }
            },
            {
                path: "/login",
                element: <Login></Login>
                
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])