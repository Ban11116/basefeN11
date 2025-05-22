import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6A6A6A] via-[#5B5B5B] to-[#C0C0C0] text-white text-sm">
      <div className="max-w-[1100px] mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-between gap-10">
        
          <div className="w-full md:w-[35%]">
            <h2 className="text-[#C15A00] font-bold text-2xl mb-3">
              Local Face
            </h2>
            <p className="mb-1 font-semibold">Subscribe to Our Newsletter:</p>
            <p className="text-xs mb-3 leading-snug">
              Receive Updates on New Arrivals and Special Promotions!
            </p>
            <div className="flex rounded overflow-hidden w-full max-w-xs bg-black">
              <input
                type="email"
                placeholder="Your email here"
                className="px-4 py-2 w-full text-sm bg-black text-white outline-none"
              />
              <button className="bg-[#C15A00] text-white px-4 text-sm font-semibold">
                Submit
              </button>
            </div>
            <div className="flex gap-4 text-white text-lg mt-4">
              <FaTwitter />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
            </div>
          </div>

          <div className="flex flex-wrap justify-between text-sm gap-4">
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="space-y-1">
                <li>Fashion</li>
                <li>Jewelry</li>
                <li>Sports</li>
                <li>Electronics</li>
                <li>Indoor</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Shopping</h3>
              <ul className="space-y-1">
                <li>Payments</li>
                <li>Delivery options</li>
                <li>Buyer protection</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Customer care</h3>
              <ul className="space-y-1">
                <li>Help center</li>
                <li>Terms & Conditions</li>
                <li>Privacy policy</li>
                <li>Returns & refund</li>
                <li>Survey & feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pages</h3>
              <ul className="space-y-1">
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact Us</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />
        <p className="text-center text-xs text-gray-200">
         2023 Local Face Inc. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
