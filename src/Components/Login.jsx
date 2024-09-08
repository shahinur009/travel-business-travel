import { useContext, useState } from "react";
import bg from '../../public/Login-background.jpg';
import img from '../../public/login.png';
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";


const Login = () => {
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post('https://hotel.aotrek.net/api/auth/login', { email, password });
            if (res.data && res.data.token) {
                login(res.data.token);
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User logged in successfully',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    navigate('/manage');
                });

            }
        } catch (error) {
            console.error("Login error:", error.response || error.message);
            Swal.fire("Login Failed!", error.response?.data?.message || "An error occurred", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-cover bg-center min-h-screen flex items-center justify-center'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 shadow-md mx-auto">
                <img src={img} alt="Login" className='flex mx-auto h-32' />
                <h1 className="text-2xl font-bold text-center uppercase">Log <span className='text-[#f57224]'>in</span></h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                        <input type="email" name="email" id="email"
                            value={email} placeholder="Your Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password"
                            value={password} className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 border-2 focus:dark:border-violet-600"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        disabled={loading}
                        className="block w-full px-1 rounded-md py-3 bg-[#f57224]">
                        {loading ? <FaSpinner className="animate-spin text-xl text-white mx-auto" /> : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
