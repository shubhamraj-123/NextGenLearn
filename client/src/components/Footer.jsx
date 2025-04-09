import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Bell,
  Linkedin,
  Facebook,
} from "lucide-react";
import { toast } from "sonner";
// import { useState } from "react";

// const [email, setEmail] = useState("");

// const handleSubscribe = () => {
//   if (email.trim() === "") {
//     toast.error("Please enter a valid email.");
//     return;
//   }
//   toast.success("Subscribed successfully!");
//   setEmail(""); // Clear the input
// };

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#1c2949] mt-8 text-black dark:text-white">
      <div className="flex flex-col md:flex-row justify-between gap-8 py-10 max-w-screen-xl mx-auto px-4">
        {/* Contact Info */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold underline underline-offset-4 decoration-blue-500 mb-4">
            Contact
          </h2>
          <p className="flex items-center gap-2 mb-3">
            <Phone size={18} /> +91 9084799590
          </p>
          <p className="flex items-center gap-2 mb-3">
            <Mail size={18} /> contact@nextgenlearn.com
          </p>
          <p className="flex items-center gap-2 mb-6">
            <MapPin size={18} /> Bhubaneswar, Odisha, India
          </p>
          <div className="flex gap-4">
            <div className="p-3 rounded-full bg-gray-200 dark:bg-[#020817] hover:bg-blue-800 dark:hover:bg-amber-400 cursor-pointer transition duration-300">
              <a href="https://www.facebook.com/">
                <Facebook size={20} className="text-black dark:text-white" />
              </a>
            </div>
            <div className="p-3 rounded-full bg-gray-200 dark:bg-[#020817] hover:bg-blue-800 dark:hover:bg-amber-400 cursor-pointer transition duration-300">
              <a href="https://www.instagram.com/">
                <Instagram size={20} className="text-black dark:text-white" />
              </a>
            </div>
            <div className="p-3 rounded-full bg-gray-200 dark:bg-[#020817] hover:bg-blue-800 dark:hover:bg-amber-400 cursor-pointer transition duration-300">
              <a href="https://www.linkedin.com/in/shubham-raj-914395241/">
                <Linkedin size={20} className="text-black dark:text-white" />
              </a>
            </div>
            <div className="p-3 rounded-full bg-gray-200 dark:bg-[#020817] hover:bg-blue-800 dark:hover:bg-amber-400 cursor-pointer transition duration-300">
              <a href="https://www.youtube.com/">
                <Youtube size={20} className="text-black dark:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold underline underline-offset-4 decoration-blue-500 mb-4">
            Newsletter
          </h2>
          <p className="mb-4">
            Welcome to the NextGenLearn April Edition – where growth meets
            opportunity! Boost your skills with NextGenLearn!
          </p>
          <div className="flex border border-black dark:border-white rounded overflow-hidden w-full max-w-sm">
            <input
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="px-3 py-2 w-full outline-none bg-white dark:bg-[#1c2949] text-black dark:text-white"
            />
            <button
              className="bg-blue-900 text-white px-4 flex items-center justify-center"
              // onClick={handleSubscribe}
            >
              <Bell size={18} />
            </button>
          </div>
        </div>

        {/* Google Map */}
        <div className="md:w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.780676465275!2d85.8037557108171!3d20.350677281055745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20University!5e0!3m2!1sen!2sin!4v1744015776011!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-blue-900 text-white text-center py-3">
        Copyright &copy; 2025{" "}
        <span className="font-semibold">NextGenLearn</span>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
