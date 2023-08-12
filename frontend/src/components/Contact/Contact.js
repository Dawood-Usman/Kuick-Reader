import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header/DashboardHeader";
import Footer from "../Footer";
import AddressIcon from "./../../assets/images/AddressIcon.png";
import MailIcon from "./../../assets/images/MailIcon.png";
import PhoneIcon from "./../../assets/images/PhoneIcon.png";
import WebsiteIcon from "./../../assets/images/WebsiteIcon.png";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const SERVICE_ID = 'service_01557ld';
  const TEMPLATE_ID = 'template_tuxk8pq';
  const USER_ID = 'FO0CRfc9tbCPf5_xx';

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "sherazmehboob14@gmail.com",
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        USER_ID
      )
      .then(
        (response) => {
          notify("Email sent successfully!", response);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          notify("Failed to send email.", error);
        }
      );
  };

  const notify = (msg) => toast(msg);


  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center h-[650px] mt-10 mx-5">
        <p className="text-3xl font-bold text-gray-700">Contact US</p>
        <div className="flex flex-row justify-center items-center w-[100%] text-gray-300 h-[100%]">
          <div className="flex flex-col w-[90%] md:w-[50%] lg:w-[30%] bg-zinc-800 rounded-l-md px-7 py-10 h-[80%]">
            <p className=" text-2xl font-semibold text-white">Write us</p>
            <form action="" className="mt-8 mr-4" onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                required
                placeholder="Name"
                className="bg-transparent border-b-2 py-1 w-[100%] border-gray-400 mb-5 outline-none"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                required
                placeholder="Email"
                className="bg-transparent border-b-2 py-1 w-[100%] border-gray-400 mb-5 outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                name="subject"
                id="subject"
                value={subject}
                required
                placeholder="Subject"
                className="bg-transparent border-b-2 py-1 w-[100%] border-gray-400 mb-5 outline-none"
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border-b-2 w-[100%] border-gray-400 mb-5 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-400 px-5 py-2 rounded-sm text-white"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="hidden md:flex flex-col md:w-[50%] lg:w-[30%] bg-black rounded-r-md px-7 py-10 h-[80%]">
            <p className="text-lg font-medium text-white">
              Contact Information
            </p>
            <p className="text-zinc-400 font-medium leading-tight tracking-tight">
              We're open for any Suggestions or just to have a Chat
            </p>
            <div className="mt-8 mr-4">
              <div className="flex flex-row justify-start items-center w-[100%] mb-9">
                <img
                  src={AddressIcon}
                  alt=""
                  className="w-8 h-fit mr-4 p-2 bg-gray-700 rounded-full"
                />
                <p className="text-white font-medium">
                  Address:{" "}
                  <span className="text-gray-400 text-sm">FAST NUCES</span>
                </p>
              </div>
              <div className="flex flex-row justify-start items-center w-[100%] mb-9">
                <img
                  src={PhoneIcon}
                  alt=""
                  className="w-8 h-fit mr-4 p-2 bg-gray-700 rounded-full"
                />
                <p className="text-white font-medium">
                  Phone:{" "}
                  <span className="text-gray-400 text-sm">+92 301 8145327</span>
                </p>
              </div>
              <div className="flex flex-row justify-start items-center w-[100%] mb-9">
                <img
                  src={MailIcon}
                  alt=""
                  className="w-8 h-fit mr-4 p-2 bg-gray-700 rounded-full"
                />
                <p className="text-white font-medium">
                  Email:{" "}
                  <span className="text-gray-400 text-sm">
                    kucikreader@gmail.com
                  </span>
                </p>
              </div>
              <div className="flex flex-row justify-start items-center w-[100%] mb-9">
                <img
                  src={WebsiteIcon}
                  alt=""
                  className="w-8 h-fit mr-4 p-2 bg-gray-700 rounded-full"
                />
                <p className="text-white font-medium">
                  Website:{" "}
                  <span className="text-gray-400 text-sm">kucikreader.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Contact;
