import React,{useState} from "react";
import {useDispatch,useSelector} from "react-redux";
import {Link} from "react-router-dom"

const Navbar =()=>{;
 const authState = useSelector(state => state.authReducer);
 const dispatch =useDispatch();
 const [isNavbarOpen ,setIsNavbarOpen] = useState(false)
 const toggleNavbar =()=>{
    setIsNavbarOpen(!isNavbarOpen);
 }
 

 return (
    <>
    <header className="flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center">
        <h2 className="cursor-pointer uppercase font-medium">
            <Link to="/" >Task Manager</Link>
        </h2>
        <ul className="hidden md:flex gap-4 uppercase font-medium">
            {authState.isLoggedIn ? (
                <>
                <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
                    
                </li>
                </>
            )} 
        </ul>

    </header>
    </>
 );


}

export default Navbar;