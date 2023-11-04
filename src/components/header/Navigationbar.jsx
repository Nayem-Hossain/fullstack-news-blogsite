import React from "react";
import { BiCalendar } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/website-logo-preview.png";
import User from "./User";
const Navigationbar = (props) => {
    return (
        <div>
            {/* Date Showing  */}
            <div className="py-2 bg-zinc-900 text-white">
                <div className="mx-10">
                    <h6 className="flex items-center">
                        <BiCalendar />{" "}
                        <span className="mx-2">Thursday, 12 October 2023</span>
                    </h6>
                </div>
            </div>

            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <div className="">
                        <Image width={200} height={200} src={logo} alt="" />
                    </div>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Insights</a></li>
                        <li><a>History</a></li>
                        <li><a>Environment</a></li>
                        <li><a>Identities</a></li>
                        <li><a>Travel</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered h-10 w-20 md:w-auto"
                        />
                    </div>

                    {props.firstName === "" && props.lastName === "" ? (<Link href="/user/login"><button className="btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login</button></Link>) : (<User />)}

                </div>
            </div>
        </div>
    );
};

export default Navigationbar;
