import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faXmark, faPowerOff, faFileLines, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar} from '../store/slices/interactSlice'
import { selectInteract } from "../store/slices/interactSlice"
import { selectAuth, logout } from "../store/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth)
  const dispatch = useDispatch();
  const handleSidebar = ()=>{
    dispatch(toggleSidebar())
  }
  const handleLogout = ()=>{
    dispatch(logout())
    navigate('/signin')
  }
  return (
    <div className="bg-white w-full h-full max-h-screen sm:w-60 sm:rounded-2xl absolute sm:relative shadow-md sm:shadow-lg overflow-y-auto">
      <div className="flex justify-between p-5 items-center sm:hidden sticky top-0">
          <p className="text-blue-800 font-bold text-lg pl-5">University Name</p>
          <FontAwesomeIcon icon={faXmark} className="text-blue-800 text-xl cursor-pointer hover:text-white hover:bg-blue-600 p-1 pr-1.5 pl-1.5 rounded-full" onClick={handleSidebar}/>
      </div>
      <Link to="/" className="p-5 sm:mt-4 hidden sm:flex items-center justify-center shadow-sm" >
        <img
          className="object-cover"
          style={{ maxWidth: "80%", maxHeight: "120px" }}
          src="https://w7.pngwing.com/pngs/192/47/png-transparent-logo-bald-eagle-golden-eagle-eagle-cdr-animals-monochrome-thumbnail.png"
          alt=""
        />
      </Link>
      <div className="flex flex-col p-0 sm:p-5 sm:pr-0 pt-0 gap-3 overflow-y-auto text-blue-400 text-lg sm:text-md">
        <Link to="/profile" className="cursor-pointer p-2 pl-5 sm:rounded-l-full flex items-center gap-4 hover:bg-blue-600 hover:shadow-xl hover:text-white ">
          <FontAwesomeIcon icon={faUser} className="text-base pl-5 sm:p-0" />
          <p>Mening Profilim</p>
        </Link>
        <div className="cursor-pointer p-2 pl-5 sm:rounded-l-full flex items-center gap-4 hover:bg-blue-600 hover:shadow-xl hover:text-white " >
          <FontAwesomeIcon icon={faFileLines} className="text-base pl-5 sm:p-0" />
          <p>Mening Arizalarim</p>
        </div>
        <Link to="/newapp" className="cursor-pointer p-2 pl-5 sm:rounded-l-full flex items-center gap-4 hover:bg-blue-600 hover:shadow-xl hover:text-white " >
          <FontAwesomeIcon icon={faFilePen} className="text-base pl-5 sm:p-0" />
          <p>Ariza Yaratish</p>
        </Link>
        <div className="cursor-pointer p-2 pl-5 sm:rounded-l-full flex items-center gap-4 hover:bg-blue-600 hover:shadow-xl hover:text-white " onClick={handleLogout} >
          <FontAwesomeIcon icon={faPowerOff} className="text-base pl-5 sm:p-0" />
          <p>Chiqish</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
