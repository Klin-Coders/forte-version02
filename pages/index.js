import { RequestAgent } from "./../components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import axios from "axios";
import Link from "next/link";
import { useAlert } from "react-alert";

const Index = ({ stats }) => {
  const alert = useAlert();
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
  const [trackingCode, setTrackingCode] = useState("");
  const [shipment, setShipment] = useState();

  const router = useRouter();

  const handleTracking = async () => {
    if (trackingCode.length < 5) {
      return alert.show(
        <div
          className="z-[10000000] text-white dark:text-white"
          style={{ textTransform: "initial", fontFamily: "Roboto" }}
        >
          Tracking code is empty or invalid!
        </div>,
        {
          type: "error",
        }
      );
    } else {
      const res = await axios.post("/api/track", { shipCode: trackingCode });

      if (res.data.status === "error") {
        alert.show(
          <div
            className="z-[10000000] text-white dark:text-white"
            style={{ textTransform: "initial", fontFamily: "Roboto" }}
          >
            {res.data.error}{" "}
          </div>,
          {
            type: "error",
          }
        );
      } else {
        setShipment(res.data.data);
      }
    }
  };

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
      <header
        className={`fixed ${
          trackingCode.length > 1 ? "z-[1]" : "z-[100000]"
        } mt-[-11vh] flex w-full justify-between border-b border-white border-mainColor bg-mainColor px-[50px] py-[15px] font-heading text-lg font-medium text-white`}
      >
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
      <div className="mt-[12vh]">
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
              <Link href="#trackQuote">
                <a className="cursor-pointer rounded-lg bg-mainColor py-[12px] px-[20px] hover:bg-white hover:text-mainColor hover:shadow hover:shadow-mainColor">
                  See our rates
                </a>
              </Link>
              <Link href="#trackQuote">
                <a className="cursor-pointer rounded-lg bg-mainColor py-[12px] px-[20px] hover:bg-white hover:text-mainColor hover:shadow hover:shadow-mainColor">
                  Track a shipment
                </a>
              </Link>
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
              <p className="mt-[10px] font-heading text-mainColor">Olayisade</p>
              <p className="font-heading ">Founder</p>
            </div>
            <div className="w-[38%]">
              <div className="mb-[30px]">
                <div className="mb-[10px] flex items-center space-x-2">
                  <span className="h-[10px] w-[10px] bg-mainColor"></span>
                  <p>Quality</p>
                </div>
                <p className="mt-[15px] text-justify text-sm text-gray-700">
                  The quality of our service is unrivaled having gained trust
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
      <RequestAgent />

      {/* section 5 */}
      <div className="relative min-h-[100vh] bg-gray-100 px-[100px]">
        <div
          id="trackQuote"
          className="absolute top-[-75px] mx-[110px] w-[70vw] scroll-mt-32 rounded-lg border border-white bg-white pb-[100px] shadow"
        >
          <div className="flex justify-between border-b border-gray-100 divide-x-2 divide-gray-500 ">
            <div
              className={`w-[50%] cursor-pointer rounded-tl-lg ${
                tab === 0 ? "bg-black text-white" : "bg-white text-black"
              } pb-[20px] pt-[30px] text-center `}
              onClick={() => setTab(0)}
            >
              <p>Track a shipment</p>
            </div>
            <div
              onClick={() => setTab(1)}
              className={`w-[50%] cursor-pointer rounded-tr-lg ${
                tab === 1 ? "bg-black text-white" : "bg-white text-black"
              } pb-[20px] pt-[30px] text-center `}
            >
              <p>Calculate tentative fee</p>
            </div>
          </div>

          {tab === 0 && (
            <>
              <div className="mt-[40px] flex flex-col items-center justify-center">
                <p className="text-lg text-center animate-pulse animate-bounce">
                  Enter a tracking code below to track your package
                </p>
                <form>
                  <div className="mt-[10px] flex items-center justify-center">
                    <input
                      className="w-[40vw] rounded-tl-lg rounded-bl-lg border border-gray-300 bg-gray-100 p-[15px] text-mainColor focus:outline-0"
                      type="text"
                      placeholder="Example - ZNzrIdnBgpU"
                      onChange={(e) => setTrackingCode(e.target.value)}
                    />
                    <button
                      className="w-fit rounded-tr-lg rounded-br-lg bg-black py-[15px] px-[20px] text-white"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTracking();
                      }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              {/* <div>
                <p>1 shipment found...</p>

                <div>
                  <p>Name:</p>
                  <p>Mrs Opemipo</p>
                </div>
              </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;

export async function getServerSideProps(context) {
  if (process.env.NODE_ENV === "development") return { props: {} };
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
}
