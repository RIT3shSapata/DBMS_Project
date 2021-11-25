import { useState } from 'react';
import axios from '../axios';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from '../actions/actionTypes';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loggedin, setLoggedin] = useState(false);
    const [user, setUser] = useState({});
    const login = async (e) => {
        e.preventDefault();
        console.log(username, password);
        const auth = { username, password };
        try {
            const response = await axios.post('login', auth);
            console.log(response.data);
            dispatch({type:LOGIN_SUCCESS, payload:response.data});
            setUser(response.data);
            setLoggedin(true);
        } catch (error) {
            console.log(error);
        }
    };
    if (loggedin) {
        return <Navigate to={user.type} />;
    }
    return (
        <div className="flex flex-grow justify-center  p-5 min-h-0 bg-bg1 ">
            <div className="w-full max-w-xs">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={login}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* Make an alert to display the error while signing in */}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            // onClick={login}
                            type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
