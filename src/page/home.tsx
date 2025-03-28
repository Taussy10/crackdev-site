import Header from "../components/header";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { getAllUser } from "../supabase/supabase";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const promisedData = async () => {
      try {
        const result = await getAllUser();
        setData(result);
      } catch (error: any) {
        console.log(error);
        throw new Error(error.message);
      }
    };
    promisedData();
  }, []);
 
  console.log("Datas from supbase :" , data);


  const filteredData = data?.filter((element)=> 
     element.totalTime/60 >1
    // console.log("Filter :", )
  )



  const sortedData = filteredData?.sort(function (a,b) {
    // You have to return data
    return b.totalTime -  a.totalTime 
  })

  
  
  






  // write a function to
// find all images without alternate text
// and give them a red border                                                                                                                                                                                         







  return (
    <div className="  ">
      <Header />

      {/* Content div will contain
      label div
      */}

      {/* Create two divs
    1. for postion , user and time 
    2. for Langugage 
    */}

      {/* Container for content bg-green-500 */}
      <div className=" mt-4  px-6 ">
        
        

        {/* label div container */}
        {/* 
        Lablel div container will contain
       div-1: position , username and language 
       div-2: Language
        */}
        <div className=" flex flex-row items-center  w-full mb-1  p-2 bg-gray-700 shadow-md  rounded-2xl ">

          {/* div-1 */}
          <div
   className="  flex flex-row  items-center  w-xl  justify-between  bg-green-500   p-2  "
          >
            <h1 className="font-bold text-2xl">Position</h1>
            <h1 className="font-bold text-2xl">User</h1>
            <h1 className="font-bold  text-2xl">Time</h1>
          </div>

          {/* Div: 2 for languges bg-amber-500 */}
          <div className="  w-full   p-2 text-center">
            <h1 className="font-bold text-2xl">Language</h1>
          </div>
        </div>

        

        {/* Here we go  */}

        {sortedData?.map((element,index) => {

    // Making them in minute: 
          const html = Math.round(element.html/60) 
          const css = Math.round(element.css/60) 
          const js = Math.round(element.js/60) 
          const jsx = Math.round(element.jsx/60) 
          const ts = Math.round(element.ts/60) 
          const tsx = Math.round(element.tsx/60) 
          const php = Math.round(element.php/60)
          const swift = Math.round(element.swift/60)
          const dart = Math.round(element.dart/60)
          const java = Math.round(element.java/60)
          const python = Math.round(element.python/60)
          const rust = Math.round(element.rust/60)
          const go = Math.round(element.go/60)
          const c = Math.round(element.c/60)
          const cpp = Math.round(element.cpp/60)
          const csharp = Math.round(element.csharp/60)
          const text = Math.round(element.text/60)
          const json = Math.round(element.json/60)
          const markdown = Math.round(element.markdown/60)
          const totalTrackedTime = Math.round(element.totalTime/60)



          
    return(
        <div 
        key={index}
        className="  flex flex-row items-center  w-full mb-1  p-2 bg-gray-300 shadow-md  rounded-2xl ">

{/* div-1 */}
<div
className="  flex flex-row  items-center  w-xl  justify-between px-2   "
>
  {/* <h1 className="font-semibold text-xl  ">#{postion}</h1> */}
  <h1 className="font-semibold text-xl  ">#{index +1}</h1>

  <div className=" flex  flex-row justify-center items-center gap-2">
   <img src={element.avatar} 
  className=" size-12 rounded-full "
  /> 

  <h1 className=" text-xl font-semibold">@{element.userName}</h1>
  </div>

  <h1 className=" text-xl font-semibold ">{totalTrackedTime}</h1>
</div>

{/* Div: 2 for languges bg-amber-500 */}
<div className="  w-full   p-2 text-center ml-7 " >


{/* Div for making flex row each component  */}
  <div className=" flex flex-row items-center flex-wrap gap-2 ">
  {
          html > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#e34f26] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            HTML
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {html}m
            </h1>
          </div>
          ): ""
        }
       {/* CSS */}
       {
          css > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#1572B6] rounded-3xl  p-2   w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            CSS
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {css}m
            </h1>
          </div>
          ): ""
        }

      {/*JS  */}
        {
          js > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#F7DF1E] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            JS
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {js}m
            </h1>
          </div>
          ): ""
        }

      {/*JSX  */}
        {
          jsx > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#61DAFB] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            JSX
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {jsx}m
            </h1>
          </div>
          ): ""
        }
      

{/*TS */}
{
          ts > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#3178C6] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            TS
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {ts}m
            </h1>
          </div>
          ): ""
        }

{/*TSX */}
{
          tsx > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#3178C6] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            TSX
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {tsx}m
            </h1>
          </div>
          ): ""
        }


{/*PHP */}
{
          php > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#777bb4] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            PHP
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {php}m
            </h1>
          </div>
          ): ""
        }

{/*Swift */}
{
          swift > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#fa7343] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Swift
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {swift}m
            </h1>
          </div>
          ): ""
        }

{/*Dart */}
{
          dart > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#0175c2] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Dart
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {dart}m
            </h1>
          </div>
          ): ""
        }

{/*Java */}
{
          java > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#007396] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Java
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {java}m
            </h1>
          </div>
          ): ""
        }


{/*Pyhon */}
{
          python > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#3776AB] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Python
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {python}m
            </h1>
          </div>
          ): ""
        }

{/*Rust */}
{
          rust > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#DEA584] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Rust
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {rust}m
            </h1>
          </div>
          ): ""
        }

{/*Go */}
{
          go > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#00add8] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Go
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {go}m
            </h1>
          </div>
          ): ""
        }

{/*C*/}
{
          c > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#a8b9cc] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            C
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {c}m
            </h1>
          </div>
          ): ""
        }

{/*CPP */}
{
          cpp > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#0059cc] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            C++
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {cpp}m
            </h1>
          </div>
          ): ""
        }

{/*Csharp */}
{
          csharp > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#239120] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            C#
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {csharp}m
            </h1>
          </div>
          ): ""
        }

{/*Text */}
{
          text > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#808080] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Text
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {text}m
            </h1>
          </div>
          ): ""
        }

{/*JSON */}
{
          json > 1? (
          <div
            className=" flex flex-row  gap-1 justify-center items-center
     bg-[#CB3837] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            JSON
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {json}m
            </h1>
          </div>
          ): ""
        }

{/*markdown */}
{
          markdown > 1? (
          <div
            className=" flex flex-row  gap-1    justify-center items-center
     bg-[#000000] rounded-3xl  p-2  w-auto "
          >
            <h1 className=" text-white   text-base  font-semibold">
            Markdown
            </h1>
            <h1 className=" text-white font-semibold text-base">
            {markdown}m
            </h1>
          </div>
          ): ""
        }

  </div>
  
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
