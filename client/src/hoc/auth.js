import { response } from "express";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";


export default function (SpecificComponent, option, adminRoute = null){

    function AuthenticationCheck(){

        // redux를 사용하기 위해 useDispatch() 사용
        const dispatch = useDispatch();

        useEffect(()=>{

            dispatch(auth()).then(response => {
                console.log(response)
            })


        }, [])




    }


}