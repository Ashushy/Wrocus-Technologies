
// 'use client'
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AuthPage = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState('');
//     const [userInfo, setUserInfo] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const router = useRouter();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo({ ...userInfo, [name]: value });
//     };

//     const apiUrl = isLogin
//         ? "https://wrocubackendapi.onrender.com/api/userauth/login"
//         : "https://wrocubackendapi.onrender.com/api/userauth/register";

//     const payload = isLogin
//         ? { email: userInfo.email, password: userInfo.password }
//         : {
//             name: userInfo.name,
//             email: userInfo.email,
//             password: userInfo.password,
//             confirmpassword: userInfo.confirmPassword
//         };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setMessage('');

//         if (!isLogin && userInfo.password !== userInfo.confirmPassword) {
//             setMessage("❌ Passwords do not match");
//             setLoading(false);
//             return;
//         }

//         if (!isLogin && userInfo.password.length < 5) {
//             setMessage("❌ Password must be at least 5 characters");
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await fetch(apiUrl, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(payload),
//             });

//             const data = await response.json();
//             setLoading(false);

//             if (!response.ok) {
//                 setMessage(`❌ ${data.message || 'An error occurred'}`);
//             } else {
//                 setMessage(`✅ ${data.message}`);
//                 setTimeout(() => {
//                     if (isLogin) {
//                         localStorage.setItem('token', data.userInfo.token);
//                         localStorage.setItem('role', data.userInfo.role);
//                         localStorage.setItem('name', data.userInfo.name);
//                         router.push('/');
//                     } else {
//                         setIsLogin(true);
//                     }
//                 }, 1500);
//             }

//             setUserInfo({ name: '', email: '', password: '', confirmPassword: '' });
//         } catch (error) {
//             setMessage("❌ Network error, please try again");
//             setLoading(false);
//         }
//     };

//     return (
//         <>
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
//                 <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96 border border-gray-300 relative">
//                     <h2 className="text-3xl font-bold text-center text-white mb-6">
//                         {isLogin ? "Login" : "Register"}
//                     </h2>

//                     {/* Success/Error Message - Centered Above Form */}
//                     {message && (
//                         <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-3  px-4 rounded-md shadow-md animate-fadeIn">
//                             {message}
//                         </div>
//                     )}

//                     <form onSubmit={handleSubmit} className="space-y-5 relative">
//                         {!isLogin && (
//                             <div>
//                                 <label className="block text-gray-300">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={userInfo.name}
//                                     onChange={handleChange}
//                                     className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
//                                     placeholder="Enter your name"
//                                     required
//                                 />
//                             </div>
//                         )}

//                         <div>
//                             <label className="block text-gray-300">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={userInfo.email}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
//                                 placeholder="Enter your email"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-gray-300">Password</label>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={userInfo.password}
//                                 onChange={handleChange}
//                                 className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
//                                 placeholder="Enter your password"
//                                 required
//                             />
//                         </div>

//                         {!isLogin && (
//                             <div>
//                                 <label className="block text-gray-300">Confirm Password</label>
//                                 <input
//                                     type="password"
//                                     name="confirmPassword"
//                                     value={userInfo.confirmPassword}
//                                     onChange={handleChange}
//                                     className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
//                                     placeholder="Confirm your password"
//                                     required
//                                 />
//                             </div>
//                         )}

//                         {loading && (
//                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                                 <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent  rounded-full animate-spin"></div>
//                             </div>
//                         )}


//                         <button
//                             type="submit"
//                             disabled={loading}
//                             className={`w-full py-3 text-white rounded-lg font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//                                 }`}
//                         >
//                             {isLogin ? "Login" : "Sign Up"}
//                         </button>
//                     </form>

//                     <div className="text-center mt-4 text-gray-300">
//                         <p>
//                             {isLogin ? "Don't have an account?" : "Already have an account?"}
//                             <button
//                                 type="button"
//                                 onClick={() => {
//                                     setIsLogin(!isLogin);
//                                     setUserInfo({ name: '', email: '', password: '', confirmPassword: '' });
//                                     setMessage('');
//                                 }}
//                                 className="ml-1 text-blue-400 hover:underline"
//                             >
//                                 {isLogin ? "Register" : "Login"}
//                             </button>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default AuthPage;


'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };
const apiUrl = isLogin
        ? "https://wrocus-technology-backend.onrender.com/api/userauth/login"
        : "https://wrocus-technology-backend.onrender.com/userauth/register";
    

    const payload = isLogin
        ? { email: userInfo.email, password: userInfo.password }
        : {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            confirmpassword: userInfo.confirmPassword
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            setLoading(true);
            setMessage('');
        
            if (!isLogin && userInfo.password !== userInfo.confirmPassword) {
                setMessage("❌ Passwords do not match");
                setLoading(false);
                return;
            }
        
            if (!isLogin && userInfo.password.length < 5) {
                setMessage("❌ Password must be at least 5 characters");
                setLoading(false);
                return;
            }
        
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
        
                const data = await response.json();
                setLoading(false);
        
                if (!response.ok) {
                    setMessage(`❌ ${data.message || 'An error occurred'}`);
                } else {
                    setMessage(`✅ ${data.message}`);
                    setTimeout(() => {
                        if (isLogin) {
                            localStorage.setItem('token', data.userInfo.token);
                            localStorage.setItem('role', data.userInfo.role);
                            localStorage.setItem('name', data.userInfo.name);
                            router.push('/admin/dashboard'); 
                        } else {
                            setIsLogin(true);
                        }
                    }, 1500);
                }
        
                setUserInfo({ name: '', email: '', password: '', confirmPassword: '' });
            } catch (error) {
                console.log("gggg",error)
                setMessage("❌ Network error, please try again");
                setLoading(false);
            }
        };
        

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-96 border border-gray-300 relative">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">
                        {isLogin ? "Login" : "Register"}
                    </h2>

                    {/* Success/Error Message - Centered Above Form */}
                    {message && (
                        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-3  px-4 rounded-md shadow-md animate-fadeIn">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5 relative">
                        {!isLogin && (
                            <div>
                                <label className="block text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userInfo.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="block text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={userInfo.password}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-gray-300">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={userInfo.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-500 rounded-lg bg-transparent text-white focus:ring focus:ring-blue-400"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>
                        )}

                        {loading && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="w-16 h-16 border-8 border-blue-500 border-t-transparent  rounded-full animate-spin"></div>
                            </div>
                        )}


                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 text-white rounded-lg font-semibold transition ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                        >
                            {isLogin ? "Login" : "Sign Up"}
                        </button>
                    </form>

                    <div className="text-center mt-4 text-gray-300">
                        <p>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                type="button"
                                onClick={() => {
                                    setIsLogin(!isLogin);
                                    setUserInfo({ name: '', email: '', password: '', confirmPassword: '' });
                                    setMessage('');
                                }}
                                className="ml-1 text-blue-400 hover:underline"
                            >
                                {isLogin ? "Register" : "Login"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;

