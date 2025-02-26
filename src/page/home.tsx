import Header from '../components/header'
import Footer from '../components/footer'
const Home = () => {
  return (
    <div className=' '>
    <Header />    
    {/* Create two divs
    1. for postion , user and time 
    2. for Langugage 
    */}

    {/* Container for body */}
    <div className=' mt-6  p-6'>


{/* Container for both divs  */}
<div className=' flex
 flex-row items-center  p-4  bg-blue-400'>

      {/* div-1 */}
      <div className=' bg-green-400 flex 
 flex-row items-center gap-24  justify-between'>
      <h1 className='font-bold'>Position</h1>
      <h1 className='font-bold'>User</h1>
      <h1 className='font-bold'>Time Today</h1>
      </div>

<div className=' bg-amber-500  w-full  p-2 text-center'>
  <h1 className='font-bold' >Language</h1>
</div>

</div>



{/* Content */}
<div className=' flex
 flex-row items-center  p-4  bg-blue-400'>

      {/* div-1 */}
      <div className=' bg-green-400 flex 
    flex-row items-center gap-24 justify-between'>
      <h1 className='font-semibold'>#1</h1>
      <h1 className='font-semibold'>@Taussy10</h1>
      <h1 className='font-semibold'>365</h1>
      </div>

<div className=' bg-amber-500  w-full  p-2 text-center'>
  
<div className=' flex flex-row  gap-2 justify-center items-center
  bg-orange-500 rounded-3xl  p-1  w-28 '>
<h1 className=' text-white   text-base  font-semibold'>HTML</h1>
<h1 className=' text-white font-semibold text-base'>24m</h1>
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