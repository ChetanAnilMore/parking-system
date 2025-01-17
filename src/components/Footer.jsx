import logo from "../assets/no-parking_12504620.png";

const Footer = () => {
  return (
    <footer id="footer" className="text-white dark:bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white" href="#">
            <img
              src={logo}
              className="w-10 h-10 text-white bg-indigo-500 rounded-full"
            ></img>
            <span className="ml-3 text-xl">SmartPark</span>
          </a>
          <p className="mt-2 text-sm text-white-500">
            All in one solution for your every parking related problem.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="text-white-600 hover:text-white-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/search" className="text-white-600 hover:text-white-800">
                  Search Parking
                </a>
              </li>
              <li>
                <a href="/rent-your-space" className="text-white-600 hover:text-white-800">
                  Rent Your Space
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-white-600 hover:text-white-800">
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              RESOURCES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/about-us" className="text-white-600 hover:text-white-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white-600 hover:text-white-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white-600 hover:text-white-800">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              QUICK LINKS
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/" className="text-white-600 hover:text-white-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/search" className="text-white-600 hover:text-white-800">
                  Search Parking
                </a>
              </li>
              <li>
                <a href="/rent-your-space" className="text-white-600 hover:text-white-800">
                  Rent Your Space
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-white-600 hover:text-white-800">
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white-900 tracking-widest text-sm mb-3">
              RESOURCES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/about-us" className="text-white-600 hover:text-white-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="/terms" className="text-white-600 hover:text-white-800">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white-600 hover:text-white-800">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white-500 text-sm text-center sm:text-left">
            © 2024 Smart Parking —
            <a
              href="https://github.com/anurag4me/parking-system"
              rel="noopener noreferrer"
              className="text-white-600 ml-1"
              target="_blank"
            >
              @Anurag
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-white-500" href="https://github.com/anurag4me/parking-system" target="_blank">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500" href="https://github.com/anurag4me/parking-system" target="_blank">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500" href="https://github.com/anurag4me/parking-system" target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-white-500" href="https://github.com/anurag4me/parking-system" target="_blank">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
