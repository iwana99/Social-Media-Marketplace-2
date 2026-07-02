import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
  
    <div className="flex flex-col items-center justify-center gap-4 my-10">
       <h1 className="text-4xl font-bold text-blue-500">
          FIND YOUR SOCIAL MEDIA
        </h1>
    </div>
    <div className="flex justify-center gap-4 my-10"> 
        <Link to="/facebook">
          <div className="text-2xl font-bold text-white bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-10 py-5 rounded-md hover:scale-110 transition-all">Facebook</div>
        </Link>
        <Link to="/instagram">
          <div className="text-2xl font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-10 py-5 rounded-md hover:scale-110 transition-all">Instagram</div>
        </Link>
        <Link to="/x">
          <div className="text-2xl font-bold text-white bg-gradient-to-r from-black via-gray-800 to-gray-600 px-10 py-5 rounded-md hover:scale-110 transition-all">X</div>
        </Link>
      </div>
     <div>
  <h1 className="text-3xl font-bold-md font-sans text-center text-black my-8">
    Top 10 Most Followed Profiles
  </h1>
  <div className="border border-gray-300 rounded-full p-4 flex flex-col gap-4">
    <div>
        <p>picture</p>
    </div>
    <div>
        
        <p>followers</p>
        <p>Price</p>
    </div>
  </div>
</div>
    </>
  ) 
}

export default Home