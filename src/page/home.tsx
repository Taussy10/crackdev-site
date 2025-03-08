import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { config, getData } from "../appwrite/appwrite";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promisedData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
      }
    };
    promisedData();
  }, []);

  console.log("Data from home.tsx", data);
console.log();

  return (
    <div className="  ">
      <Header />
      {/* Create two divs
    1. for postion , user and time 
    2. for Langugage 
    */}

      {/* Container for body */}
      <div className=" mt-2  p-6">
        {/* Container for both divs  */}

        {/* For labling: username , languge, time all bg-blue-400 */}
        <div className=" flex mb-1 flex-row items-center  p-4 bg-gray-300 shadow-md  rounded-2xl ">
          {/* div-1 */}
          {/* bg-green-400 */}
          <div
            className="  flex 
 flex-row items-center gap-24 p-2  justify-between"
          >
            <h1 className="font-bold text-2xl">Position</h1>
            <h1 className="font-bold text-2xl">User</h1>
            <h1 className="font-bold  text-2xl">Time</h1>
          </div>

          {/* Div: 2 for languges bg-amber-500 */}
          <div className="   w-full  p-2 text-center">
            <h1 className="font-bold text-2xl">Language</h1>
          </div>
        </div>





        {data.map((element, index) => {
          return(
          <div
          key={index}
            className=" flex bg-[#eeeeee]   shadow-lg flex-row items-center  px-4 mb-2.5 rounded-xl 
              ">
            
            {/* div-1 */}
            <div  className="  flex flex-row items-center  bg-orange-400   w-96  justify-between"
            >
              <h1 className="font-semibold text-xl  ml-7">#1</h1>
              <h1 className=" text-xl font-semibold">
                @{element?.username}
              </h1>
              <h1 className=" text-xl font-semibold ">{element?.totalTime}</h1>
            </div>

            {/* bg-amber-500  */}
            <div className="  w-full  p-2 text-center ml-16">
              {/* div for languages   */}
              <div className=" flex flex-row items-center gap-2">
              
              {
                element?.html > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#e34f26] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  HTML
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.html}m
                  </h1>
                </div>
                ): ""
              }


{/* CSS */}
              {
                element?.css > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#1572B6] rounded-3xl  p-2   w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  CSS
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.css}m
                  </h1>
                </div>
                ): ""
              }

            {/*JS  */}
              {
                element?.js > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#F7DF1E] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  JS
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.js}m
                  </h1>
                </div>
                ): ""
              }

            {/*JSX  */}
              {
                element?.jsx > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#61DAFB] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  JSX
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.jsx}m
                  </h1>
                </div>
                ): ""
              }
            

 {/*TS */}
 {
                element?.ts > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#3178C6] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  TS
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.ts}m
                  </h1>
                </div>
                ): ""
              }

 {/*TSX */}
 {
                element?.tsx > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#3178C6] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  TSX
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.tsx}m
                  </h1>
                </div>
                ): ""
              }


 {/*PHP */}
    {
                element?.php > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#777bb4] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  PHP
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.php}m
                  </h1>
                </div>
                ): ""
              }

 {/*Swift */}
    {
                element?.swift > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#fa7343] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Swift
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.swift}m
                  </h1>
                </div>
                ): ""
              }

 {/*Dart */}
    {
                element?.dart > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#0175c2] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Dart
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.dart}m
                  </h1>
                </div>
                ): ""
              }

 {/*Java */}
    {
                element?.java > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#007396] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Java
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.java}m
                  </h1>
                </div>
                ): ""
              }


 {/*Pyhon */}
    {
                element?.python > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#3776AB] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Python
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.python}m
                  </h1>
                </div>
                ): ""
              }

 {/*Rust */}
    {
                element?.rust > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#DEA584] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Rust
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.rust}m
                  </h1>
                </div>
                ): ""
              }

 {/*Go */}
    {
                element?.go > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#00add8] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Go
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.go}m
                  </h1>
                </div>
                ): ""
              }

 {/*C*/}
    {
                element?.c > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#a8b9cc] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  C
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.c}m
                  </h1>
                </div>
                ): ""
              }

 {/*CPP */}
    {
                element?.cpp > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#0059cc] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  C++
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.cpp}m
                  </h1>
                </div>
                ): ""
              }

 {/*Csharp */}
    {
                element?.csharp > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#239120] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  C#
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.sharp}m
                  </h1>
                </div>
                ): ""
              }

 {/*Text */}
    {
                element?.text > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#808080] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Text
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.text}m
                  </h1>
                </div>
                ): ""
              }

 {/*JSON */}
    {
                element?.json > 1? (
                <div
                  className=" flex flex-row  gap-1 justify-center items-center
           bg-[#CB3837] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  JSON
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.json}m
                  </h1>
                </div>
                ): ""
              }

 {/*markdown */}
    {
                element?.markdown > 1? (
                <div
                  className=" flex flex-row  gap-1    justify-center items-center
           bg-[#000000] rounded-3xl  p-2  w-auto "
                >
                  <h1 className=" text-white   text-base  font-semibold">
                  Markdown
                  </h1>
                  <h1 className=" text-white font-semibold text-base">
                  {element.markdown}m
                  </h1>
                </div>
                ): ""
              }




              </div>

              {/* Divs for languages */}
            </div>
          </div>
        )})}

        {/* add here container from home */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
