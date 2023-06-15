

import React, {useEffect} from 'react';
import {Avatar, Button} from "@mui/material";

import {Google} from "@mui/icons-material";

import {signInWithPopup,onAuthStateChanged } from "firebase/auth"
import {useRouter} from "next/router";
import {auth, provider} from "@/firebase";


function Login() {
    const router = useRouter()



    useEffect(() => {
        onAuthStateChanged(auth,user => {
            if (user) {
                router.push("/")
            }
        })
    },[])

    return (
        <div className={" h-screen p-6"}>
            <header className="flex basis-1/5   ">
                <img
                    src="https://media.designrush.com/inspirations/129137/conversions/_1521201517_957_UberLogoPreview-preview.jpg"
                    alt=""
                    className="rounded w-30 h-20 object-contain self-start "/>

            </header>
            <div className={"py-3"}>
                <h1 className={"text-4xl text-gray-600"}>Login to access your account</h1>
                <img src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="" className="max-h-80 pb-2 w-full object-contain"/>

            </div>
            <div className={"w-full "}>
                <Button onClick={() => signInWithPopup(auth,provider)} className="flex gap-4 w-full bg-black text-white rounded py-3   hover:bg-black ">
                    <Google className={"text-white text-2xl"}/>Sign in with Google</Button>

            </div>
        </div>
    );
}

export default Login;


