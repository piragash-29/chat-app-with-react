import React, {useState} from 'react';
import { Auth } from 'aws-amplify';

const initialState = {
    username: "",
    password: ""
}
const LoginForm = () => {
    const [loginState, setLoginState] = useState(initialState);

    function handleChangeInput(event) {
        console.log(event.target.value)
        const {name, value} = event.target;
        setLoginState({ ...loginState, [name]: value })
    }
    const signIn = async () => {
        try {
            const user = await Auth.signIn(loginState);
        } catch (error) {
            console.log('error signing in', error);
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={signIn}>
                    <input
                        type="text"
                        name="username"
                        value={loginState.username}
                        onChange={handleChangeInput}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={loginState.password}
                        onChange={handleChangeInput}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Login</span>
                        </button>
                    </div>
                </form>
                <h1>Error</h1>
            </div>
        </div>
    )
}

export default LoginForm;