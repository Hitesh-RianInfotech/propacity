import {
    Facebook,
    Linkedin,
    Instagram,
    Youtube,
    X,
  } from "lucide-react";
  import Image from "next/image";
  
  export default function Footer() {
    return (
      <footer className="bg-[#121212] text-gray-300 pt-16 pb-6 px-6 md:px-20 text-sm">
        <div className="max-w-6xl mx-auto border-t border-gray-700 pt-12 grid md:grid-cols-3 gap-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Our Story</li>
              <li>Career</li>
              <li>Grow With Us</li>
              <li>Ganga Foundation</li>
              <li>Life At Ganga</li>
            </ul>
          </div>
  
          {/* Column 2 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Insights & News</h4>
            <ul className="space-y-2">
              <li>Resources</li>
              <li>Blog</li>
              <li>Media</li>
              <li>Awards</li>
            </ul>
          </div>
  
          {/* Column 3 */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support & Policies</h4>
            <ul className="space-y-2">
              <li>Pay Online</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Refund & Cancellation Policy</li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Info */}
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-12 pt-10 grid md:grid-cols-4 gap-6 items-center text-sm">
          {/* Address */}
          <div>
            <h4 className="text-white font-semibold mb-2">Reach Us</h4>
            <p className="text-gray-400 leading-relaxed">
              Ground Floor, Tower A, <br />
              Vatika Tower, Sector 54, <br />
              Golf Course Road Gurugram, <br />
              Haryana 122011
            </p>
          </div>
  
          {/*badge */}
          <div className="flex justify-center">
            <Image
              src="/images/4.svg"
              alt="Great Place to Work"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
  
          {/* Contact Info */}
          <div className="text-center">
            <p className="text-white font-medium">Phone</p>
            <p className="text-gray-400">+91-9990084084</p>
            <p className="mt-4 text-white font-medium">Email</p>
            <p className="text-gray-400">info@gangarealty.com</p>
          </div>
  
          {/* Company Names */}
          <div className="text-right">
            <p>Ganga Global Homes Pvt. Ltd.</p>
            <p>Jai Ganga Realtech LLP</p>
            <div className="flex justify-end mt-4 space-x-4">
              <Facebook className="w-5 h-5 hover:text-white" />
              <Linkedin className="w-5 h-5 hover:text-white" />
              <X className="w-5 h-5 hover:text-white" />
              <Instagram className="w-5 h-5 hover:text-white" />
              <Youtube className="w-5 h-5 hover:text-white" />
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-800 pt-4">
          © Copyright 2025 Ganga Realty, All Rights Reserved.
        </div>
      </footer>
    );
  }
  