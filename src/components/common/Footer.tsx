import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white text-sm">
      <div className="w-full px-12 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">

          {/* Left Section */}
          <div className="md:w-[35%]">
            <h2 className="text-[#C15A00] font-bold text-2xl mb-3">Local Face</h2>
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
              <button className="bg-[#C15A00] text-white px-4 text-sm font-semibold hover:bg-[#a44a00] transition">
                Submit
              </button>
            </div>
            <div className="flex gap-4 text-white text-lg mt-4">
              <FaTwitter className="cursor-pointer hover:text-[#C15A00] transition" />
              <FaFacebookF className="cursor-pointer hover:text-[#C15A00] transition" />
              <FaLinkedinIn className="cursor-pointer hover:text-[#C15A00] transition" />
              <FaInstagram className="cursor-pointer hover:text-[#C15A00] transition" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap flex-1 justify-between gap-y-6 mt-10 md:mt-0">
            {[
              {
                title: 'Categories',
                items: ['Fashion', 'Jewelry', 'Sports', 'Electronics', 'Indoor'],
              },
              {
                title: 'Shopping',
                items: ['Payments', 'Delivery options', 'Buyer protection'],
              },
              {
                title: 'Customer care',
                items: [
                  'Help center',
                  'Terms & Conditions',
                  'Privacy policy',
                  'Returns & refund',
                  'Survey & feedback',
                ],
              },
              {
                title: 'Pages',
                items: ['About Us', 'Shop', 'Contact Us', 'Services', 'Blog'],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="w-1/2 sm:w-1/3 md:w-[45%] lg:w-1/4"
              >
                <h3 className="font-semibold mb-2">{group.title}</h3>
                <ul className="space-y-1">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="cursor-pointer hover:text-[#C15A00] transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-400 " />
        <p className="text-center text-xs text-gray-200">
          2023 Local Face Inc. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
