import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="cursor-pointer">Work With Us</p>
        <p className="cursor-pointer">Contact Us</p>
        <p className="cursor-pointer">Who Are We?</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">INFO</h5>
        <p className="cursor-pointer">Why Choosing Us?</p>
        <p className="cursor-pointer">Amazing Stories</p>
        <p className="cursor-pointer">Wonderful Experiences</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COUNTRIES</h5>
        <p className="cursor-pointer">Germany</p>
        <p className="cursor-pointer">France</p>
        <p className="cursor-pointer">Others</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p className="cursor-pointer">Get Help</p>
        <p className="cursor-pointer">FAQ</p>
        <p className="cursor-pointer">Local Support</p>
      </div>
    </div>
  );
}

export default Footer;
