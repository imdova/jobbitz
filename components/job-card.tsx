import { FaDollarSign, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

import React from "react";
import ShareMenu from "./ShareMenu";
import { Post } from "@/types";
import Image from "next/image";

const JobCard: React.FC<{ post: Post; index: number }> = ({ post }) => {
  return (
    <div className="bg-white animate-fade-in flex flex-col justify-start w-full border rounded-lg shadow-sm pb-4">
      {/* Name and Edit */}
      <div className="relative h-44 w-full overflow-hidden rounded-t-lg">
        <Image src={post.image} alt="logo" fill objectFit="cover" />
      </div>
      <div className="flex items-center justify-between mx-4 mt-4">
        <h3 className="text-lg font-bold text-black  text-nowrap">
          {post.name}
        </h3>
        <ShareMenu link="https://jobs.imetsms.com/" />
      </div>
      <div className="text-xs text-gray-500 font-semibold text-nowrap flex items-center gap-2 ml-1 px-4">
        <FaLocationDot className="w-3 h-3 " />
        <p className="my-1">{post.location}</p>
        <FaClock className="w-3 h-3 " />
        <p className="my-1">{post.jobTime}</p>
      </div>
      {/* Features */}
      <div className="flex flex-wrap text-xs gap-1 px-4 ">
        {post.features.map((feature, index) => (
          <div key={index} className="px-2 p-1 bg-gray-200 rounded-full">
            <span>{feature}</span>
          </div>
        ))}
        <div className="flex items-center gap-1 px-2 p-1 bg-gray-200 rounded-full">
          <FaDollarSign className="w-3 h-3" /> <span>{post.budget}</span>
        </div>
      </div>
      {/* Apply Button */}
      <div className="flex justify-center gap-2 items-center mt-4 ">
        <a
          href={post.url}
          className="bg-primary flex  items-center  rounded-full px-2 py-2 text-white hover:bg-light-primary duration-200 "
        >
          <span className="px-2">Apply Now</span>
          <div className="p-2 bg-white rounded-full">
            <IoIosArrowUp className="text-primary w-4 h-4 rotate-45" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default JobCard;
