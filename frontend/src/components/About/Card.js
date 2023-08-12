import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { members } from "../../Data/teamData";


function Card() {
  return (
    <>
      <p className="sm:text-3xl text-2xl font-semibold text-blue-700 my-3">Meet The Team</p>
      <div className="flex flex-row justify-center items-center flex-wrap w-full p-5">
        {members.map((member) => (
          <div className="flex flex-col flex-nowrap w-[270px] py-5 px-4 bg-zinc-100 shadow rounded-none my-3 mx-5">
            <img
              src={member.profile}
              alt=""
              className="w-[40%] h-24 object-cover rounded-full self-center p-2 my-2"
            />
            <p className="text-2xl font-semibold text-gray-700 text-center leading-tight">
              {member.name}
            </p>
            <p className="text-lg text-zinc-400 text-center mb-4">
              {member.role}
            </p>
            <p className="text-sm text-zinc-400 text-center leading-tight mb-6">
              {member.description}
            </p>
            <div className="flex flex-row justify-center items-center">
              <a
                href={member.facebookLink}
                className="rounded-full w-7 text-center mr-3 text-xl bg-blue-600 hover:scale-110 duration-300 ease-in-out text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href={member.twitterLink}
                className="rounded-full w-7 text-center mr-3 text-xl bg-sky-400 hover:scale-110 duration-300 ease-in-out text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href={member.linkedInLink}
                className="rounded-full w-7 text-center mr-3 text-xl bg-blue-500 hover:scale-110 duration-300 ease-in-out text-white"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
