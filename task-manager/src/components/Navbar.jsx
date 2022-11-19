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
                <Link to='/tasks/add' className='block w-full h-full px-4 py-2'> <i className="fa-solid fa-plus"></i> Add task </Link>
                </li>
                <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' onClick={handleLogoutClick}>Logout</li>
                </>
                ):(
                    <li className="py-2 px-3 cursor-pointer text-primary hover:bg-gray-100 transition rounded-sm"><Link to="/Login">Login</Link></li>
            )} 
        </ul>
        <span className="md:hidden cursor-pointer" onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>

    </header>
    </>
 );


}

export default Navbar;