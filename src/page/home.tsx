import Header from '../components/header'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div className='  '>
    <Header />    
    {/* Create two divs
    1. for postion , user and time 
    2. for Langugage 
    */}

    {/* Container for body */}
    <div className=' mt-2  p-6'>


{/* Container for both divs  */}

{/* For labling: username , languge, time all bg-blue-400 */}
<div className=' flex mb-1
 flex-row items-center  p-4 bg-gray-300 shadow-md  rounded-2xl '>

      {/* div-1 */}
      {/* bg-green-400 */}
      <div className='  flex 
 flex-row items-center gap-24 p-2  justify-between'>
      <h1 className='font-bold text-2xl'>Position</h1>
      <h1 className='font-bold text-2xl'>User</h1>
      <h1 className='font-bold  text-2xl'>Time</h1>
      </div>

{/* Div: 2 for languges bg-amber-500 */}
<div className='   w-full  p-2 text-center'>
  <h1 className='font-bold text-2xl' >Language</h1>
</div>
</div>





{/* For Content bg-blue-400 */}
<div className=' flex    bg-[#eeeeee]  shadow-lg   
 flex-row items-center  px-4 mb-2  rounded-xl  '>
      {/* div-1 bg-green-400 */}
      <div className='  flex 
    flex-row items-center  gap-24 justify-between'>
      <h1 className='font-semibold text-xl ml-7'>#1</h1>
      <h1 className=' text-xl font-semibold ml-10'>@saleh</h1>
      <h1 className=' text-xl font-semibold '>365</h1>
      </div>

{/* bg-amber-500  */}
<div className='  w-full  p-2 text-center ml-16'>

  {/* div for languages   */}
  <div className=' flex flex-row items-center   gap-2'>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-orange-500 rounded-3xl  p-2  w-28 '>
<h1 className=' text-white   text-base  font-semibold'>HTML</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-yellow-500 rounded-3xl  p-2  w-28 '>
<h1 className=' text-white   text-base  font-semibold'>JS</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-blue-500 rounded-3xl  p-2   '>
<h1 className=' text-white   text-base  font-semibold'>Markdown</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-blue-500 rounded-3xl  p-2   '>
<h1 className=' text-white   text-base  font-semibold'>Markdown</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-blue-500 rounded-3xl  p-2   '>
<h1 className=' text-white   text-base  font-semibold'>Markdown</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>


    </div>

{/* Divs for languages */}

</div>


</div>


<div className=' flex    bg-[#eeeeee]  shadow-lg  
 flex-row items-center  px-4 mb-1 rounded-xl   '>

      {/* div-1 bg-green-400 */}
      <div className='  flex 
    flex-row items-center  gap-24 justify-between'>
      <h1 className='font-semibold text-xl ml-7'>#2</h1>
      <h1 className=' text-xl font-semibold ml-10'>@stewi</h1>
      <h1 className=' text-xl font-semibold '>254</h1>
      </div>

{/* bg-amber-500  */}
<div className='  w-full  p-2 text-center ml-16'>

  {/* div for languages   */}
  <div className=' flex flex-row items-center   gap-2'>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-[#CE422B] rounded-3xl  p-2  w-28 '>
<h1 className=' text-white   text-base  font-semibold'>Rust</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-green-500 rounded-3xl  p-2  w-28 '>
<h1 className=' text-white   text-base  font-semibold'>JSON</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-blue-500 rounded-3xl  p-2   '>
<h1 className=' text-white   text-base  font-semibold'>tsx</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-yellow-500 rounded-3xl  p-2   '>
<h1 className=' text-white   text-base  font-semibold'>jsx</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-blue-700 rounded-3xl  p-2   '>
<h1 className=' text-white   text-base  font-semibold'>ts</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
</div>


    </div>

{/* Divs for languages */}

</div>

  {/* Language */}



</div>





</div>

    <Footer/>
    </div>
  )
}

export default Home