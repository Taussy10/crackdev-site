import image from "../assets/react.svg"

const Header = () => {
  return (
    <div className=" flex flex-row items-center justify-between
     bg-amber-300
    ">
<img src={image} />  
    
    {/* Container for logo and coffee  */}
    <div className="  flex flex-col items-center ">
<h1 className="text-2xl font-bold text-blue-500">CrackDev</h1>
<img src={image} />  
    </div>

{/* Will write here something */}
<h1 className="text-2xl font-bold underline text-blue-500">
    Hello Dude!
  </h1>
    </div>

  )
}

export default Header