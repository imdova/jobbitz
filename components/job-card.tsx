import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import React from "react";
import ShareMenu from "./ShareMenu";

interface Post {
  image: string;
  date: string;
  name: string;
  features: string[];
  budget: string;
  country: string;
  category: string;
  specialty: string;
  applicant: string;
  maxApplicant: string;
}
const JobCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="job-card flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center border p-4 rounded-lg shadow-sm">
      {/* Main Content Area */}
      <div className="flex flex-nowrap gap-4 items-center justify-between w-full">
        {/* Info Section */}
        <div className="flex flex-col justify-start w-full">
          {/* Name and Edit */}
          <div className="flex gap-2 justify-between">
            <div className="">
              <h3 className="text-lg font-bold text-black">{post.name}</h3>
              <div className="flex items-center gap-2 ml-1">
                <FaLocationDot className="w-3 h-3 text-black/50" />
                <p className="text-sm text-gray-500 my-1 font-semibold">
                  Nasr City, Cairo{" "}
                </p>
              </div>
            </div>
            <ShareMenu link="https://medicova.com" />
          </div>

          {/* Features */}
          <div className="features flex flex-wrap  text-xs text-gray-400 sm:w-4/5 pr-4 sm:pr-0">
            {post.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1 ml-2">
                <span className="w-1 h-1 bg-gray-400 rounded-full ring-1 ring-gray-400"></span>
                <span>{feature}</span>
              </div>
            ))}
            <div className="flex items-center gap-1">
              <FaDollarSign className="w-3 h-3" /> <span>{post.budget}</span>
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="bg-primary text-nowrap px-4 py-2 text-white hover:bg-light-primary duration-200 ">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
