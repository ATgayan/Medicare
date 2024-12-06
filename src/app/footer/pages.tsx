import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faEnvelope,faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
      <footer className="bg-white text-black py-8">
       <hr className="w-full h-1 bg-gray-400 border-none mb-2" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
         
          <div>
            <h2 className="text-xl font-bold mb-3 p-3">Medicare</h2>
            
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400 flex">
                <FontAwesomeIcon icon={faPhone} className="text-sm w-5 m-1" />
                <span>055-1231235</span> 
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400 flex">
                <FontAwesomeIcon icon={faEnvelope} className="text-sm w-5 m-1" />
                <span>  medicare@gmail.com</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400 flex">
                    
                <FontAwesomeIcon icon={faPaperPlane} className="text-sm w-5 m-1" />
               <span> Badulla</span>
                </a>
              </li>
             
            </ul>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                 Appointment
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
  
    
      </footer>
    );
  }
  