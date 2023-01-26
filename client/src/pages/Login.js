import { useState } from 'react'
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isLoading } = useLogin()


    const handleForm = async (e) => {
        e.preventDefault();
        await login(username, password)
    }




    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <button disabled={isLoading} type="submit">Login</button>
                {error && <div className="error">{error}</div>}
            </form>

        </div>
    )
}

export default Login