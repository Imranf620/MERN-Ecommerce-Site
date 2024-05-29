import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor
              magna nec diam interdum, ac sollicitudin dolor accumsan.
            </p>
          </div>
          {/* Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Shipping
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom section */}
        <div className="mt-8 font-[Roboto] border-t border-gray-700 pt-8 flex justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} My E-Commerce. All rights
            reserved.
          </p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
