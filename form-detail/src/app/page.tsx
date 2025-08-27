export default function AppearanceSettings() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">

      
        <h2 className="text-xl font-semibold mb-2 text-black">Appearance</h2>
        <p className="text-gray-500 mb-6 text-sm border-b border-gray-300 pb-2">Set or customize your preferences for the system</p>

      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1 ">Language</label>
          <select className="  w-40 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 ml-60 mb-4">
            <option>English</option>
            <option>Spanish</option>
    
          </select>
          <p className="text-gray-400 text-xs  -mt-9 border-b border-gray-300 pb-2">Select the language of the platform</p>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Interface theme</label>
          <p className="text-gray-400 text-xs mb-2 ">Customize your application appearance</p>
          <div className="flex gap-3">
            <div className="flex-1 border rounded-lg py-8 p-3 cursor-pointer flex justify-center items-center text-black bg-purple-100 ">
              Auto
            </div>
            <div className="flex-1 border-2 border-indigo-500 rounded-lg p-3 cursor-pointer flex justify-center items-center bg-white text-black">
              Light
            </div>
            <div className="flex-1 border rounded-lg p-3 cursor-pointer flex justify-center items-center bg-indigo-700 text-white ">
              Dark
            </div>
            
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Accent color</label>
          <p className="text-gray-400 text-xs mb-2 border-b border-gray-300 pb-2">Pick your platform's main color</p>
          <div className="flex gap-2 ml-60  -mt-9">
            <div className="w-6 h-6 rounded-full bg-red-400 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-full bg-yellow-300 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-full bg-green-400 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-full bg-indigo-500 cursor-pointer"></div>
            <div className="w-6 h-6 rounded-full bg-pink-400 cursor-pointer"></div>
          </div>
        </div>
        

       <div className="flex flex-col gap-4 mb-6">
  <label className="flex items-center justify-between  border-b border-gray-300 pb-2">
    <span className="text-gray-700">✨Reduce motion</span>4
    <input type="checkbox" className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-all checked:before:translate-x-7" defaultChecked />
    
  </label>

  <label className="flex items-center justify-between  border-b border-gray-300 pb-2">
    <span className="text-gray-700 ">▶️ Auto play</span>
    <input type="checkbox" className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-all checked:before:translate-x-7" defaultChecked />
   
  </label>

  <label className="flex items-center justify-between  border-b border-gray-300 pb-2">
    <span className="text-gray-700 ">📷High quality photo</span>
    <input type="checkbox" className="appearance-none w-14 h-7 rounded-full bg-gray-300 checked:bg-indigo-500 relative transition duration-300 cursor-pointer before:content-[''] before:absolute before:w-6 before:h-6 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-all checked:before:translate-x-7" />
  </label>
</div>


        <div className="flex justify-end gap-3">
          <button className=" text-gray-300 mr-4 ">Reset to default</button>
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">Save Preferences</button>
          <button className="px-4 py-2 text-gray-700 rounded-lg border border-gray-300">Cancel</button>
        </div>
      </div>
    </div>
  );
}
