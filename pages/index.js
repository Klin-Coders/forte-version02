import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [slides, setSlides] = useState([
    "/slide2.jpg",
    "/slide1.jpg",
    "/slide3.jpg",
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cta, setCta] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 8000);

    console.log(currentSlide);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className=" font-brand">
      <header className="flex justify-between border-b border-mainColor bg-mainColor px-[50px] py-[20px] font-heading text-lg font-medium text-white">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3>FORTE-BRIDGE</h3>
        </div>
        <div className="hidden w-[30vw] items-center justify-between md:flex">
          <div className="relative cursor-pointer group">
            <p>Services</p>
            <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[3px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
          </div>
          <div className="relative cursor-pointer group">
            <p>Tracking</p>
            <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[3px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
          </div>
          <div className="relative cursor-pointer group">
            <p>Locations</p>
            <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[3px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
          </div>
        </div>
        <div className="items-center hidden space-x-4 md:flex ">
          <div
            className="relative cursor-pointer group"
            onClick={() => router.push("/login")}
          >
            <p>Login</p>
            <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[3px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
          </div>
          <p
            className="cursor-pointer rounded-lg bg-white px-[20px] py-[8px] text-mainColor hover:animate-pulse"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </p>
        </div>
        <svg
          onClick={() => setShowMenu(!showMenu)}
          className="w-8 h-8 cursor-pointer text-mainColor md:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </header>
      <div
        data-aos="slide"
        className={`${
          showMenu ? "block" : "hidden"
        } mx-auto flex w-[90vw] flex-col items-center space-y-[10px] rounded-b border border-t-0 border-mainColor bg-gray-100 pb-[20px] shadow-lg shadow-black/50 transition`}
      >
        <div className="group relative mt-[20px] w-full cursor-pointer text-center text-lg">
          <p>Services</p>
          <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[2px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
        </div>
        <div className="relative w-full text-lg text-center cursor-pointer group">
          <p>Tracking</p>
          <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[2px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
        </div>
        <div className="relative w-full text-lg text-center cursor-pointer group">
          <p>Locations</p>
          <span className="m-bottom-1 ease-bloop duration-400 absolute left-0 h-[2px] w-full scale-x-0 transform rounded-sm bg-white transition group-hover:scale-x-100 "></span>
        </div>
        <div className="flex items-center space-x-12 pt-[10px]">
          <p
            className="cursor-pointer rounded-lg bg-mainColor px-[20px] py-[8px] text-white hover:animate-pulse"
            onClick={() => router.push("/login")}
          >
            Login{" "}
          </p>
          <p
            className="cursor-pointer rounded-lg bg-mainColor px-[20px] py-[8px] text-white hover:animate-pulse"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </p>
        </div>
      </div>
      {/* slideshow */}
      <div className="relative z-[-1] h-[80vh] w-full" data-aos="fade">
        <Image
          className="w-full h-full"
          objectFit="cover"
          layout="fill"
          src={slides[currentSlide]}
        />
        <div className="absolute z-[10] h-[80vh] w-full bg-black/80">
          <div className="mt-[80px] ml-[90px] text-white">
            <p className="mb-[5px] pl-[10px] text-lg">
              Flexible, Improved, Lightning-fast Logistics Service
            </p>
            <p className="mb-[5px] font-heading text-6xl font-bold">
              Advanced & Sustainable
            </p>
            <p className="mb-[30px] font-heading text-6xl font-bold">
              Cargo Solutions!
            </p>
            <div className="mb-[5px] flex space-x-2">
              <svg
                className="w-6 h-6 text-mainColor"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Quality Control System, 100% Satisfaction Guarantee</p>
            </div>
            <div className="mb-[5px] flex space-x-2">
              <svg
                className="w-6 h-6 text-mainColor"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Highly Professional Staff, Accurate Measurements Processes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-[60px] mt-[-60px] flex h-[120px] w-[70vw] items-center justify-between divide-x rounded-xl  bg-white shadow-lg shadow-black/50">
        <div
          onClick={() => setCta(0)}
          className={`items-left flex h-full flex-1 cursor-pointer items-center justify-center  space-x-2 rounded-tl-xl rounded-bl-xl text-left  ${
            cta === 0 ? "bg-mainColor text-white" : "bg-white text-mainColor"
          }`}
        >
          <svg
            className="h-[50px] w-[50px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <div>
            <p className="text-xs">Sustainable</p>
            <p>Warehousing</p>
            <p>Services</p>
          </div>
        </div>
        <div
          onClick={() => setCta(1)}
          className={`items-left flex h-full flex-1 cursor-pointer items-center justify-center  space-x-2  text-left  ${
            cta === 1 ? "bg-mainColor text-white" : "bg-white text-mainColor"
          }`}
        >
          <svg
            className="h-[50px] w-[50px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <div>
            <p className="text-xs">Reliable</p>
            <p>Air Freight</p>
            <p>Services</p>
          </div>
        </div>
        <div
          onClick={() => setCta(2)}
          className={`items-left flex h-full flex-1 cursor-pointer items-center justify-center  space-x-2  text-left  ${
            cta === 2 ? "bg-mainColor text-white" : "bg-white text-mainColor"
          }`}
        >
          <svg
            className="h-[50px] w-[50px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
            />
          </svg>

          <div>
            <p className="text-xs">Innovative</p>
            <p>Ocean Freight</p>
            <p>Services</p>
          </div>
        </div>
        <div
          onClick={() => setCta(3)}
          className={`items-left flex h-full flex-1 cursor-pointer items-center justify-center  space-x-2 rounded-tr-xl rounded-br-xl text-left  ${
            cta === 3 ? "bg-mainColor text-white" : "bg-white text-mainColor"
          }`}
        >
          <svg
            className="h-[50px] w-[50px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
          <div>
            <p className="text-xs">Flexible</p>
            <p>Road Freight</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
