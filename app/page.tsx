import JobCard from "@/components/job-card";
import { posts } from "./constants";

export default function Home() {
  return (
    <main className="container md:max-w-[1170px] mx-auto font-epilogue my-5 p-4">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Available Jobs</h1>
        <p className="text-sm text-gray-400">
          the available jobs in Cairo for 2025. You can find the perfect job for
          you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        {posts.map((post, index) => (
          <JobCard key={index} post={post} />
        ))}
      </div>
    </main>
  );
}
