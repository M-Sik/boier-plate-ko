import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from 'react-router-dom'


export default function (SpecificComponent, option, adminRoute = null){

    // let navigate = useNavigate();

    //**** option ****/
    //null  =>  아무나 출입이 가능한 페이지
    //true  =>  로그인한 유저만 출입이 가능한 페이지
    //false  =>  로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(){

        let navigate = useNavigate();
        // redux를 사용하기 위해 useDispatch() 사용
        const dispatch = useDispatch();

        useEffect(()=>{

            dispatch(auth()).then(response => {
                console.log(response)

                // 로그인 하지 않은 상태
                if (!response.payload.isAuth){
                    // login하지 않고 option이 true인 페이지에 들어가려고 할 경우
                    if(option) {
                        navigate('/login')
                    }
                }else{
                    // 로그인 한 상태
                    // admin(회원)이 아닌데 admin이 들어갈 수 있는 페이지를 들어가려고 할 경우
                    if(adminRoute && !response.payload.isAdmin){
                        navigate('/')
                    } else {
                        if(option === false){
                            navigate('/')
                        }
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        );


    }

    // return AuthenticationCheck();
    return (<AuthenticationCheck />)
}