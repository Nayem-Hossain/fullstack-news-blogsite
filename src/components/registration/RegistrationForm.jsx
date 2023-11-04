'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import logoGoogle from "/public/images/logo-google.png";
import React, { useState } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';

const RegistrationForm = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputOnChange = (name, value) => {
        setUser((user) => ({ ...user, [name]: value }));
    };

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        console.log(typeof (user.password));
        if (user.password === user.confirmPassword) {
            const res = await fetch('/api/user/registration', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Accept': 'application/json', 'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            // Handle the response, display success or error messages, and redirect
            if (data['status'] === true) {
                toast.success('Registration Successfull!')
                router.replace('/login');
            } else {
                console.log(data['data']);
            }
        }
        else {
            toast.error("Password didn't matched.")
        }
    }

    return (
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
            <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
                <div className="flex items-center justify-center w-full lg:p-12">
                    <div className="flex items-center xl:p-10">
                        <form onSubmit={handleSubmitRegister} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                            <h3 className="mb-3 text-4xl font-extrabold text-dark-slate-900">
                                Sign Up
                            </h3>
                            <p className="mb-4 text-slate-700">Register your account</p>
                            <Link href="www.google.com" className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-slate-900 bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:ring-slate-300">
                                <Image className="h-5 w-5 mr-2" src={logoGoogle} alt="" />
                                Sign-up with Google
                            </Link>
                            <div className="flex items-center mb-3">
                                <hr className="h-0 border-b border-solid border-slate-500 grow" />
                                <p className="mx-4 text-slate-600">or</p>
                                <hr className="h-0 border-b border-solid border-slate-500 grow" />
                            </div>
                            <div className='flex gap-x-4'>
                                <div className='text-start'>
                                    <label
                                        htmlFor="firstName"
                                        className="block mb-2 text-sm text-slate-900"
                                    >
                                        First Name*
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            handleInputOnChange("firstName", e.target.value);
                                        }}
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter first name"
                                        className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-400 mb-4 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                                        required
                                    />
                                </div>
                                <div className='text-start'>
                                    <label
                                        htmlFor="lastName"
                                        className="block mb-2 text-sm text-slate-900"
                                    >
                                        Last Name*
                                    </label>
                                    <input
                                        onChange={(e) => {
                                            handleInputOnChange("lastName", e.target.value);
                                        }}
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter last name"
                                        className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-400 mb-4 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                                        required
                                    />
                                </div>
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
                                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-400 mb-4 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                                required
                            />
                            <label
                                htmlFor="phone"
                                className="mb-2 text-sm text-start text-slate-900"
                            >
                                Phone*
                            </label>
                            <input
                                onChange={(e) => {
                                    handleInputOnChange("phone", e.target.value);
                                }}
                                id="phone"
                                type="tel"
                                placeholder="Enter phone"
                                className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-slate-400 mb-4 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                                required
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
                                required
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 text-sm text-start text-slate-900"
                            >
                                Confirm Password*
                            </label>
                            <input
                                onChange={(e) => {
                                    handleInputOnChange("confirmPassword", e.target.value);
                                }}
                                id="confirmPassword"
                                type="password"
                                placeholder="Enter confirm password"
                                className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-slate-400 placeholder:text-slate-700 bg-slate-200 text-dark-slate-900 rounded-2xl"
                                required
                            />

                            <button type='submit' className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 rounded-2xl hover:bg-purple-600 focus:ring-4 focus:ring-purple-100 bg-purple-500">
                                Sign Up
                            </button>
                            <Toaster />
                            <p className="text-sm leading-relaxed text-slate-900">
                                Already Registered?
                                <Link href="/login" className="font-bold text-slate-700 ms-2">
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationForm;