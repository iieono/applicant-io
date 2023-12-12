import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLanguage, toggleSidebar, selectInteract, changeLanguage } from '../store/slices/interactSlice'

function Navbar() {
  const dispatch = useDispatch();
  const interact = useSelector(selectInteract);
  const handleSidebar = ()=>{
    dispatch(toggleSidebar())
  }
  const handleLanguage = ()=>{
    dispatch(toggleLanguage())
  }
  const handleChangeLanguage = (lang)=>{
    dispatch(changeLanguage(lang))
    dispatch(toggleLanguage())
  }
  return (
    <div className='w-full h-16 flex flex-col justify-between text-blue-800'>
      <div className='p-1 pl-5 pr-5 pb-0 flex gap-1 text-sm items-center h-full cursor-pointer text-blue-400' onClick={handleSidebar}>
        {/* <FontAwesomeIcon icon={faBars} /> */}
        <p className=''>Sahifalar</p>
        <p>/</p>
        <p>Asosiy</p>
      </div>
      <div className='p-1 pl-5 pt-0 pr-5 flex justify-between items-center'>
        <div>
          <p className='text-2xl font-bold'>Bosh sahifa</p>
        </div>
        <div className=' shadow-sm flex p-2 pr-4 pl-4 items-center gap-2 rounded-full w-min bg-white text-blue-400 text-sm'>
          <div className={`relative ${interact.isSidebar ? 'invisible sm:visible' : 'visible'}`}>
            <button className=' rounded pr-2 pl-2 flex items-center gap-1' onClick={handleLanguage}>
                {interact.lang == 0 ? 'Uz' : interact.lang == 1 ? 'Ru' : 'En' }
                <FontAwesomeIcon icon={faCaretDown} className="text-base cursor-pointer"/>
              </button>
              {interact.isLang && <div className='flex flex-col absolute justify-center align-center border bg-white shadow-sm w-full gap-2 rounded p-2'>
                {interact.lang != 0 && <button className='hover:bg-blue-600 hover:text-white rounded' onClick={()=>handleChangeLanguage(0)}>Uz</button>}
                {interact.lang != 1 && <button className='hover:bg-blue-600 hover:text-white rounded' onClick={()=>handleChangeLanguage(1)}>Ru</button>}
                {interact.lang != 2 && <button className='hover:bg-blue-600 hover:text-white rounded' onClick={()=>handleChangeLanguage(2)}>En</button>}
              </div>}
          </div>
          <FontAwesomeIcon icon={faUser}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar