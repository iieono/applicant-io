import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth, login} from "../../store/slices/authSlice";


function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);
  useEffect(()=>{
    if(auth.isAuthenticated){
      navigate('/')
    }
  },[])

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!number || !password){
      return
    }
    const data = JSON.stringify({
      phone: number,
      password: password
    })

    const config = {
      method: "POST",
      url: "http://localhost:8080/api/v1/auth/login",
      headers:{
        'accept': '*/*',
        'Content-Type': 'application/json'
      },
      data: data
    }

    try {
      const response = await axios(config)
      console.log(response.data)
      if(response.data.data){
        const userData = response.data.data
        dispatch( login(userData) )
        navigate('/')
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="bg-white sm:bg-inherit w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="sm:bg-white sm:shadow-sm sm:border rounded-xl flex flex-col p-5 gap-1">
        <div className="flex flex-col gap-3 p-5 items-center">
          <p className="text-2xl text-blue-800 font-bold mb-3">
            Shaxsiy kabinetga kirish
          </p>
          <button className="w-full bg-gray-100 text-blue-800 rounded-xl p-2">
            HEMIS orqali kirish
          </button>
          <button className="w-full bg-gray-100 text-blue-800 rounded-xl p-2">
            OneID orqali kirish
          </button>
        </div>
        <div className="flex items-center justify-center text-blue-300 gap-3 pr-5 pl-5">
          <hr  className="w-full"/>
          <p>yoki</p>
          <hr  className="w-full"/>
        </div>
        <form className="flex flex-col p-5 gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="login" className="pl-1 text-blue-800 text-sm">
              Login *
            </label>
            <input
              id="login"
              type="text"
              className="p-2 pr-5 pl-4 rounded-xl focus:outline-none border text-sm text-black"
              placeholder="Login yoki telefon raqami"
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="parol" className="pl-1 text-blue-800 text-sm">
              Parol *
            </label>
            <input
              id="parol"
              type="password"
              className="p-2 pr-4 pl-4 rounded-xl focus:outline-none border text-sm text-black"
              placeholder="************"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-xl text-sm"
          >
            Kirish
          </button>
          <p className="text-xs text-blue-800">
            Login parol olish uchun fakultet rahbariyatiga uchrashing
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
