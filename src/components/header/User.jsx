import Image from 'next/image';
import React from 'react';
import user_img from "/public/images/profile.png";

const User = () => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar me-10">
                <div className="w-10 rounded-full">
                    <Image width={200} height={200} src={user_img} alt="" />
                </div>
            </label>
            <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li>
                    <a>Settings</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
        </div>
    );
};

export default User;
