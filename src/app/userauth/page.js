'use client'
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';



const page = () => {

    const [isLogin, setIsLogin] = useState(true)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const router = useRouter();
    const handleChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })

    }
    const apiUrl = isLogin ?
        "https://wrocubackendapi.onrender.com/api/userauth/login"
        : "https://wrocubackendapi.onrender.com/api/userauth/register"


    const payload = isLogin ? {
        email: userInfo.email,
        password: userInfo.password
    } :
        {
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            confirmpassword: userInfo.confirmPassword
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLogin && userInfo?.password !== userInfo?.confirmPassword) {
            setError("Password do not match");
            return;//stop the form submission
        }
        if (!isLogin && userInfo?.password.length < 5) {
            setError("password must be greater than 5 digit")
            return;
        }

        setLoading(true)
        try {

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const data = await response.json();
            setLoading(false)
            if (!response.ok) {
                setError(data.message || 'An error occured');
            }
            else {
                setError('');
                setSuccess(data.message)

                console.log(data)

            }
            if (!isLogin) {
                setTimeout(() => {
                    setIsLogin(true)
                    setSuccess('')
                }, 1000);
            }

            if (isLogin) {

                localStorage.setItem('token', data.userInfo.token);
                localStorage.setItem('role', data.userInfo.role);
                localStorage.setItem('name', data.userInfo.name);

                setTimeout(() => {
                    router.push('/');
                }, 2000);


            }
            setUserInfo({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            

        }

        catch (error) {
            setError(error.message)
            console.log("Error", error)

        }
        finally {
            setLoading(false)

        }

    }
    return (
        <>
            <section style={{ height: '100vh' }}>
                <div className='bg-gray-100 p-6' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>

                    <div className=' bg-white p-6' style={{ width: '500px' }}>
                        <p className='text-center mb-6 text-2xl'>{isLogin ? "Login" : "Register"} </p>
                        {
                            isLogin && error && (
                                <div>
                                    <p className='text-red-400'>{error}</p>
                                </div>
                            )
                        }
                        {isLogin && success && (
                            <div>
                                <p className='text-center text-green-400'>{success}</p>
                            </div>
                        )}

                        {!isLogin && error && (
                            <div>
                                <p className='text-red-400'>{error}</p>
                            </div>
                        )}
                        {!isLogin && success && (
                            <div>
                                <p className='text-center text-green-400'>{success}</p>
                            </div>
                        )}

                        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>

                            {
                                !isLogin && (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="david malan"
                                            required=""
                                            onChange={handleChange}
                                            name='name'
                                            value={userInfo.name}
                                        />
                                    </div>
                                )
                            }
                            <div className="mb-8">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@gmail.com"
                                    required=""
                                    onChange={handleChange}
                                    name='email'
                                    value={userInfo.email}
                                />
                            </div>
                            <div className="mb-8">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    placeholder='*******'
                                    onChange={handleChange}
                                    name='password'
                                    value={userInfo.password}
                                />
                            </div>

                            {
                                !isLogin && (
                                    <div className="mb-8">
                                        <label
                                            htmlFor="confirm password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            placeholder='*******'
                                            onChange={handleChange}
                                            name='confirmPassword'
                                            value={userInfo.confirmPassword}
                                        />
                                    </div>
                                )
                            }


                            <button
                                type="submit"
                                disabled={loading}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                             focus:ring-blue-300  rounded-lg text-md  w-full  px-6  py-3 text-center
                              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                {isLogin ? "Login" : 'Signup'}
                            </button>

                            <div className='text-center mt-4'>
                                <p>
                                    {isLogin ? "Don't have an account ? " : "Already have an account?"}
                                    <span className='ml-1'>
                                        <button type='button' onClick={() => {
                                            setIsLogin(!isLogin);
                                            //reset userInfo when switching between login and register
                                            setUserInfo({
                                                name: '',
                                                email: '',
                                                password: '',
                                                confirmPassword: ''
                                            })
                                        }}>{isLogin ? "Register " : "Login"}</button>
                                    </span>
                                </p>
                            </div>
                        </form>
                    </div>


                </div>
            </section>
        </>
    )
}

export default page