import JobCard from "@/components/job-card";
import { posts } from "./constants";

export default function Home() {
  return (
    <main className="container md:max-w-[1170px] mx-auto font-epilogue mb-5 mt-1 p-4 pt-0 ">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Available Jobs</h1>
        <p className="text-sm text-gray-400">
          Browse among 3000 available jobs in{" "}
          <span className="font-bold text-primary">cairo</span> today!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-4 ">
        {posts.map((post, index) => (
          <JobCard key={index} post={post} index={index} />
        ))}
      </div>
    </main>
  );
}
