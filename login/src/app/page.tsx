export default function Home() { 
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <div className="w-[900px] h-[550px] bg-white rounded-2xl flex gap-5 p-5">


      
        <div className="w-[300px] h-[500px] bg-gray-200 rounded-2xl relative">
          <img src="\data.webp" className="absolute  w-[900px] h-[650px] left-10 top-[-70px]" />
        </div>


       
        <div className="absolute top-19 right-80 text-12 text-black">
          Dont have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
        </div>

        <div className="absolute top-40 right-155 text-4xl text-black">
          Sign in
        </div>

    
        <div className="flex flex-col gap-3 justify-center ml-30 text-black text-sm">
          Sign in with Open account

          <div className="flex gap-3">
            <div className="w-[140px] h-[40px] bg-gray-400 rounded-xl flex justify-center items-center">
               <img src="\image.png" className="w-35 h-10 rounded-xl  "/>


            </div>
            <div className="w-[140px] h-[40px] bg-gray-600 rounded-xl flex justify-center items-center">
               <img src="\Apple.jpg" className="w-35 h-10 rounded-xl  "/>
            </div>
          </div>

          Or continue with email address
          <div className="w-[300px] h-[40px] bg-gray-100 rounded-xl flex items-center px-2 gap-2">
            <img src="\icone.png" className="w-6 h-6" />
            <span>tam@ulB.net</span>
          </div>

          <div className="w-[300px] h-[40px] bg-gray-100 rounded-xl flex items-center px-2 gap-2">
            <img src="\pasword.png" className="w-6 h-6" />
            <span>***********</span>
            </div>
          <div className="w-[300px] h-[40px] bg-blue-600 rounded-xl flex items-center justify-center text-white">Start trading</div>
        </div>

      </div>
    </div>
  );
}
