import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import axios from "axios";

const Index = ({ stats }) => {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  const [showMenu, setShowMenu] = useState(false);
  const [slides, setSlides] = useState([
    "/slide2.jpg",
    "/slide1.jpg",
    "/slide3.jpg",
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cta, setCta] = useState(0);
  const [tab, setTab] = useState(0);
  const [terms, setTerms] = useState(false);
  const [requestData, setRequestData] = useState({
    name: "",
    mobile: "",
    services: [],
    terms: false,
  });
  const router = useRouter();

  console.log(requestData);
  const handleAgentRequest = async () => {};

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === slides.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  return (
    <div className="font-brand">
      <header className="fixed z-[100000] mt-[-11vh] flex w-full justify-between border-b border-mainColor bg-mainColor px-[50px] py-[15px] font-heading text-lg font-medium text-white">
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
      <div className="mt-[11vh]">
        {" "}
        <div className="relative">
          <div className="relative z-[-1] h-[85vh] w-full" data-aos="fade">
            <Image
              className="w-full h-full"
              objectFit="cover"
              layout="fill"
              src={slides[currentSlide]}
              priority
              alt="slideshow"
            />
            <div className="absolute h-[85vh] w-full bg-black/80"></div>
          </div>
          <div className="absolute top-0 z-[1000] mt-[90px] ml-[100px]  text-white">
            <div className="mb-[15px] flex space-x-1 pl-[10px] font-heading text-lg italic">
              <p>Secure & Lightning-fast logistics from Turkey to</p>{" "}
              <span className="text-white">
                <Typewriter
                  options={{
                    strings: [
                      "Nigeria",
                      "Ghana",
                      "Kenya",
                      "USA",
                      "UK",
                      "Canada",
                      "your doorstep!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <p className="mb-[5px] font-heading text-6xl font-bold">
              Advanced & Sustainable
            </p>
            <p className="mb-[40px] font-heading text-6xl font-bold">
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
            <div className="z-[1000] mt-[30px] flex space-x-6">
              <p className="cursor-pointer rounded-lg bg-mainColor py-[12px] px-[20px] hover:bg-white hover:text-mainColor hover:shadow hover:shadow-mainColor">
                See our rates
              </p>
              <p className="cursor-pointer rounded-lg bg-mainColor py-[12px] px-[20px] hover:bg-white hover:text-mainColor hover:shadow hover:shadow-mainColor">
                Track a shipment
              </p>
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

      {/* section 2 */}
      <div className="mx-auto flex w-[70vw] justify-between pt-[30px]">
        <div className="max-w-[62%]">
          <p className="font-800 mb-[10px] text-mainColor">
            Providing full range of delivery services worldwide
          </p>
          <p className="mb-[5px] font-heading text-4xl">
            Reliable Logistic & Transport
          </p>
          <p className="mb-[20px] font-heading text-4xl">
            Solutions Saves Your Time!
          </p>
          <div className="flex justify-between pt-[20px]">
            <div className="w-[55%] text-sm ">
              <p className="text-justify text-gray-700">
                Forte-Bridge Global Logistics is a trusted and tested logistics
                operator providing full range service in the sphere of air and
                sea shipping, customs clearance of any kind of shipment with
                delivery to your doorstep.
              </p>
              <p className="mt-[15px] text-justify text-gray-700">
                We pride ourselves in providing the best service to our clients
                and even only take payment after your goods arrives and has been
                cleared in selected countries
              </p>
              <p className="mt-[15px] text-justify text-gray-700">
                Our skilled personnel are well versed in utilizing state of the
                art communications & tracking combined with experience in
                integrated supply chain technology solutions
              </p>
              <p className="mt-[10px] font-heading text-mainColor">
                Olayisade Kehinde
              </p>
              <p className="font-heading ">Founder</p>
            </div>
            <div className="w-[38%]">
              <div className="mb-[30px]">
                <div className="mb-[10px] flex items-center space-x-2">
                  <span className="h-[10px] w-[10px] bg-mainColor"></span>
                  <p>Quality</p>
                </div>
                <p className="mt-[15px] text-justify text-sm text-gray-700">
                  Following the quality of our service thus having gained trust
                  from many clients
                </p>
              </div>
              <div className="mb-[10px] flex items-center space-x-2">
                <span className="h-[10px] w-[10px] bg-mainColor"></span>
                <p>Reliability</p>
              </div>
              <p className="mt-[15px] text-justify text-sm text-gray-700">
                We provide with cargo safety throughout all the stages of our
                delivery process
              </p>
            </div>
          </div>
        </div>
        <div className="w-[30%] pt-[30px]">
          <div className="relative h-[460px] w-full">
            <Image
              src="/cargo2.jpg"
              objectFit="cover"
              layout="fill"
              alt="side image"
            />
            <div className="absolute top-[40%] left-[-30px] flex h-[160px] w-[150px] flex-col items-center rounded-lg bg-mainColor p-[10px]">
              <svg
                className="h-[40px] w-[40px] text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="mt-[20px] text-4xl text-white">
                {formatter.format(1e7)}+
              </p>
              <p className="mt-[5px] text-xs text-white">Delivered shipments</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="mt-[100px] w-full bg-gray-200 pt-[50px]">
        <div className="mb-[-75px]">
          <p className="mb-[5px] text-center text-sm text-mainColor">
            Safe & Reliable Shipment Delivery Channels!
          </p>
          <p className="text-4xl text-center font-heading">
            Explore the Freight Options Available to you.
          </p>
          <div className="mx-auto mt-[50px] flex max-w-[70vw] items-center justify-between space-x-[30px]">
            <div>
              <div className="relative h-[200px] w-full" data-aos="fade">
                <Image
                  className="w-full h-full"
                  objectFit="cover"
                  layout="fill"
                  src="/air.png"
                  priority
                  alt="air freight"
                />
              </div>
              <div className="bg-white p-[25px]">
                <p className="font-800 mb-[10px] font-heading text-lg">
                  Air Freight
                </p>
                <p className="mb-[15px] text-sm text-gray-500">
                  We can provide with comprehensive service with urgent
                  valuable, fragile or any type of cargoes via air freight
                </p>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Quality Control System</p>
                </div>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>100% Satisfaction</p>
                </div>
                <div className="flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Profound item handling</p>
                </div>
                <div className="mx-auto mt-[20px] mb-[10px] flex w-fit cursor-pointer items-center space-x-2 rounded-lg bg-mainColor px-[10px] py-[8px] text-white">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Read More</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative  h-[200px] w-full" data-aos="fade">
                <Image
                  className="w-full h-full"
                  objectFit="cover"
                  layout="fill"
                  src="/sea.png"
                  priority
                  alt="ocean freight"
                />
              </div>
              <div className="bg-white p-[25px]">
                <p className="font-800 mb-[10px] font-heading text-lg">
                  Ocean Freight
                </p>
                <p className="mb-[15px] text-sm text-gray-500">
                  We offer provisional service with the all types of sea cargo
                  transportation which is implemented via our partner vessels{" "}
                </p>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Unrivaled Workmanship</p>
                </div>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Accurate measurements</p>
                </div>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Good client support</p>
                </div>
                <div className="mx-auto mt-[20px] mb-[10px] flex w-fit cursor-pointer items-center space-x-2 rounded-lg bg-mainColor px-[10px] py-[8px] text-white">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Read More</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative  h-[200px] w-full" data-aos="fade">
                <Image
                  className="w-full h-full"
                  objectFit="cover"
                  layout="fill"
                  src="/road.png"
                  priority
                  alt="Road freight"
                />
              </div>
              <div className="bg-white p-[25px]">
                <p className="font-800 mb-[10px] font-heading text-lg">
                  Road Freight
                </p>
                <p className="mb-[15px] text-sm text-gray-500">
                  We offer inter-state and intra-state way-billing services as
                  well as easy and safe trucking to your doorstep
                </p>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Commercial route expertise</p>
                </div>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Tracking and monitoring</p>
                </div>
                <div className="mb-[8px] flex items-center space-x-2 text-sm font-extrabold">
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
                  <p>Logistical understanding</p>
                </div>
                <div className="mx-auto mt-[20px] mb-[10px] flex w-fit cursor-pointer items-center space-x-2 rounded-lg bg-mainColor px-[10px] py-[8px] text-white">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>Read More</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div className="flex w-full justify-between bg-mainColor px-[100px] pb-[150px] pt-[100px] text-white">
        <div className="mt-[120px] w-[50%]">
          <p className="italic">Need a seasoned personal shopper?</p>
          <p className="my-[5px] font-heading text-3xl">
            Request for an experienced & trusted
          </p>
          <p className="my-[5px] font-heading text-3xl">
            Forte-Bridge procurement agent
          </p>
        </div>
        <div className="mt-[70px] mr-[100px] w-[40%]">
          <form className="flex flex-col space-y-[20px]">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-[5px]">
                Your name
              </label>
              <input
                onChange={(e) =>
                  setRequestData({ ...requestData, name: e.target.value })
                }
                className="min-w-0 p-1 uppercase border-0 rounded-lg text-mainColor focus:outline-0"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-[5px]">
                Your Whatsapp number
              </label>
              <input
                onChange={(e) =>
                  setRequestData({ ...requestData, mobile: e.target.value })
                }
                className="min-w-0 p-1 uppercase border-0 rounded-lg text-mainColor focus:outline-0"
                type="text"
                name="name"
                placeholder="+23480180180156"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-[5px]">
                Service you are interested in{" "}
              </label>
              <input
                className="min-w-0 p-1 uppercase border-0 rounded-lg text-mainColor focus:outline-0"
                type="text"
                name="name"
              />
            </div>

            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                name="terms"
                onChange={(e) =>
                  setRequestData({ ...requestData, terms: !requestData.terms })
                }
              />
              <span>
                I have read and agreed to the{" "}
                <span
                  className="underline cursor-pointer underline-offset-2"
                  onClick={() => setTerms(!terms)}
                >
                  terms and conditions
                </span>{" "}
                of this application
              </span>
            </div>
            {terms && (
              <>
                <p>
                  Read the following terms and conditions binding this
                  application
                </p>
                <p>
                  1. Kindly note that if we give you an agent from forte-bridge,
                  you are not allowed to instruct the agent to send your goods
                  through any other cargo in Turkey that offers the same or
                  similar services as Forte-Bridge Global Logistics unless a
                  waiver has been given to you by the management
                </p>
                <p>
                  2. To mitigate the risk fraud, you should notify the
                  management of forte-bridge of dealing and transactions with
                  the agent of any deals deal worth more than 1 million naira or
                  $2000 or proceed with trust at your own risk.
                </p>
                <p>
                  3.If any of our agents takes your goods to another cargo, that
                  means that they no longer work with us, hence conducting
                  business with such individuals is at your own risk! notify us
                  immediately before you continue to transact with such agent!
                </p>
              </>
            )}
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleAgentRequest();
              }}
              className="mx-auto mt-[20px] mb-[10px] w-fit rounded-lg bg-white py-[10px] px-[20px] text-mainColor "
            >
              Submit request
            </button>
          </form>
        </div>
      </div>

      {/* section 5 */}
      <div className="mt-[-100px] bg-gray-100 ">
        <div className="mx-auto w-[70vw] rounded-lg bg-white pt-[30px]">
          <div className="flex justify-between divide-x-2 divide-mainColor border-b border-mainColor pb-[20px]">
            <div className="w-[50%] text-center">
              <p>Track a shipment</p>
            </div>
            <div className="w-[50%] text-center">
              <p>Calculate tentative fee</p>
            </div>
          </div>

          <div className="flex justify-between divide-x-2 divide-mainColor pb-[20px]">
            hi
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

// export async function getServerSideProps(context) {
//   if (process.env.NODE_ENV === "development") return { props: {} };
//   return {
//     redirect: {
//       destination: "/login",
//       permanent: false,
//     },
//   };
// }
