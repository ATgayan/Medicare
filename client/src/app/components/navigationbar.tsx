export default function Navbar() {
    return (
      <nav className="bg-transparent">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
     
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold ml-2">Medicare</span>
          </div>
  
      
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="font-bold text-gray-700 hover:text-black hover:bg-blue-400 p-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a href="pages/appointment"
                className="text-gray-700 hover:text-black hover:bg-blue-400 p-2 rounded font-bold">
                Appointment
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-700 hover:text-black hover:bg-blue-400 p-2 rounded font-bold"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-black hover:bg-blue-400 p-2 rounded font-bold"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-black hover:bg-blue-400 p-2 rounded font-bold"
              >
                Contact Us
              </a>
            </li>
          </ul>
  
          <div className="flex space-x-4">
            <button className="shadow-md px-4 py-2 bg-gradient-to-b from-slate-400 to-white ">
              Sign In
            </button>
            <button className="px-4 py-2 bg-gradient-to-b from-purple-950 to-purple-800 hover:from-pink-500 hover:to-orange-500 text-white rounded hover:bg-blue-600">
              Register
            </button>
          </div>
        </div>
      </nav>
    );
  }
  