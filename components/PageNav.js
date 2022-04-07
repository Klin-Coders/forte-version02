import { useRouter } from "next/router";

const PageNav = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className="ml-[15px] flex cursor-pointer items-center space-x-[15px] py-[10px] "
    >
      <svg
        className="w-6 h-6 text-white animate-pulse"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-white">Go Back</p>
    </div>
  );
};

export default PageNav;
