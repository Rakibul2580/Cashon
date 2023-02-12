import React from "react";
import Profile from "../assets/svg/profile.svg";
import Notification from "../assets/svg/notification.svg";
import Search from "../assets/svg/search.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5 border-b-2 px-7">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-7">
        <label className="relative">
          <input
            type="search"
            name="search"
            placeholder="Search..."
            className="px-2 py-1 bg-white border rounded-lg focus:border-blue-500"
          />
          <img src={Search} className="absolute w-4 top-2 right-2" alt="img" />
        </label>
        <button>
          <img alt="img" src={Notification} />
        </button>
        <button>
          <img src={Profile} alt="igm" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
