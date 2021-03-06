import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const dispatch = useDispatch();
    // 페이지 이동시킬 때 사용하는 변수 -> navigate
    let navigate = useNavigate();

    // email state생성
    const [Email, setEmail] = useState("");
    // email 텍스트필드에 값을 넣기 위해서 setEmail 사용 -> event.currentTarget.value
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    // password state생성
    const [Password, setPassword] = useState("");
    // password 텍스트필드에 값을 넣기 위해서 setPassword 사용 -> event.currentTarget.value
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    // name state 생성
    const [Name, setName] = useState("");
    // name 텍스트필드에 값을 넣기 위해서 setName 사용 -> event.currentTarget.value
    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    // ConfirmPassword state 생성
    const [ConfirmPassword, setConfirmPassword] = useState("");
    // ConfirmPassword 텍스트필드에 값을 넣기 위해서 setConfirmPassword 사용 -> event.currentTarget.value
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    }

    
    const onSubmitHandler = (event) => {
        // 페이지가 리프레쉬 되지 않도록 event.preventDefault() 사용
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        // 서버에 보낼 Email, Password를 body에 담아줌
        let body = {
            email: Email,
            password: Password,
            name: Name
        }

        // dispatch를 통해 reducer에 값 전달함.
        // ./action 폴더에 user_action.js 파일에 longinUser 함수에 body전달.
        // 로그인 성공시 '/'경로의 페이지로 이동
        dispatch(registerUser(body))
        .then(response => {
            // 로그인 성공시
            // response.payload.success는 백에서 던져주는거임. server -> index.js
            // payload는 redux에서 보내주고, success는 백에서 던져줌. true일시 로직 수행.
            if (response.payload.success) {
                // 리액트 라우터 버전 v5 => props.history.push('/') 를 이용하여 페이지 이동.
                // 리액트 라우터 버전 v6 => navigate('/')로 페이지 이동.
                navigate('/login')
            } else {
                alert('Failed to sign up')
            }
        })
    }




    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>

            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                {/* email state 넣어줌 */}
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Name</label>
                {/* name state 넣어줌 */}
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                {/* password state 넣어줌 */}
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                {/* confirm password state 넣어줌 */}
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                
                <br />
                <button type='submit'>
                    회원가입
                </button>
            </form>
            
        </div>
    )
}

export default RegisterPage
