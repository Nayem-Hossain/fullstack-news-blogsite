'use client'
import React, { useState } from 'react';
import Image from "next/image";
import logoGoogle from "/public/images/logo-google.png";
import checkMark from "/public/images/check-mark.png";
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const LoginForm = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInputOnChange = (name, value) => {
        setUser((user) => ({ ...user, [name]: value }));
    };

    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json',
            },
        });

        const data = await res.json();
        // Handle the response, display success or error messages, and redirect
        if (data['status'] === true) {
            toast.success('Login Successfull !')
            router.replace('/');
        } else {
            toast.error('Login Failed !')
            console.log(data['data']);
        }
    }

    return (
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <div className="flex items-center xl:p-10">
                        <form onSubmit={handleSubmitLogin} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-slate-900">
                                Sign In
                            </h3>
                            <p className="mb-4 text-slate-700">Enter your email and password</p>
                            <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-slate-900 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-slate-300">
                                <Image className="h-5 w-5 mr-2" src={logoGoogle} alt="" />
                                Sign in with Google
                            </a>
                            <div className="flex items-center mb-3">
                                <hr className="h-0 border-b border-solid border-slate-500 grow" />
                                <p className="mx-4 text-slate-600">or</p>
                                <hr className="h-0 border-b border-solid border-slate-500 grow" />
                            </div>
                            <label
                                htmlFor="email"
                                className="mb-2 text-sm text-start text-slate-900"
                            >
                                Email*
                            </label>
                            <input
                                onChange={(e) => {
                                    handleInputOnChange("email", e.target.value);
                                }}
                                id="email"
                                type="email"
                                placeholder="yourmail@gmail.com"
                                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-400 mb-7 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                            />
                            <label
                                htmlFor="password"
                                className="mb-2 text-sm text-start text-slate-900"
                            >
                                Password*
                            </label>
                            <input
                                onChange={(e) => {
                                    handleInputOnChange("password", e.target.value);
                                }}
                                id="password"
                                type="password"
                                placeholder="Enter a password"
                                className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-400 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                            />
                            <div className="flex flex-row justify-between mb-8">
                                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                    <input type="checkbox" value="" className="sr-only peer" />
                                    <div className="w-5 h-5 bg-white border-2 border-slate-700 rounded-sm peer-checked:bg-purple-700 peer-checked:border-0 ">
                                        <Image className="" src={checkMark} alt="tick" />
                                    </div>
                                    <span className="ml-3 text-sm font-normal text-slate-900">
                                        Keep me logged in
                                    </span>
                                </label>
                                <a
                                    href="javascript:void(0)"
                                    className="mr-4 text-sm font-medium text-purple-700"
                                >
                                    Forget password?
                                </a>
                            </div>
                            <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-purple-600 focus:ring-4 focus:ring-purple-100 bg-purple-500">
                                Sign In
                            </button>
                            <Toaster />
                            <p className="text-sm leading-relaxed text-slate-900">
                                Not registered yet?
                                <Link href="/registration" className="font-bold text-slate-700 ms-2">
                                    Create an Account
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;