export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-300">
      <main className="flex flex-col bg-white rounded-2xl p-4 w-[360px]">

        <div className="flex flex-row flex-nowrap basis-auto mb-2">
          <span className="basis-2/3 text-blue-900 text-sm">Tue Feb 18 2025</span>
          <span className="basis-1/3 text-sm text-gray-500 text-right">9:31:25 p.m.</span>
        </div>

  
        <div className="flex basis-auto mb-2">
          <h1 className="text-blue-900 font-bold">List Tailwind</h1>
        </div>

    
        <div className="flex flex-row flex-nowrap basis-auto text-sm text-gray-700 mb-3">
          <span className="basis-1/7">s</span>
          <span className="basis-1/7">m</span>
          <span className="basis-1/7">t</span>
          <span className="basis-1/7">w</span>
          <span className="basis-1/7">t</span>
          <span className="basis-1/7">f</span>
          <span className="basis-1/7">s</span>
        </div>

    
        <div className="flex flex-col flex-wrap basis-auto">

          {/* Tarea 1 */}
          <div className="flex flex-row items-center bg-blue-100 rounded-xl px-3 py-2 mb-2">
            <div className="flex items-center justify-center basis-1/6">
              <span className="flex items-center justify-center rounded-full bg-green-700"
                    style={{ width: 24, height: 24 }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
            </div>
            <div className="flex basis-3/6">
              <span className="line-through text-green-700">take out the trash</span>
            </div>
            <div className="flex basis-2/6">
              <span className="ml-auto text-blue-900 font-semibold text-sm">9:00 AM</span>
            </div>
          </div>

      
          <div className="flex flex-row items-center bg-blue-100 rounded-xl px-3 py-2 mb-2">
            <div className="flex items-center justify-center basis-1/6">
              <span className="flex items-center justify-center rounded-full bg-green-700"
                    style={{ width: 24, height: 24 }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
            </div>
            <div className="flex basis-3/6">
              <span className="line-through text-green-700">do homework</span>
            </div>
            <div className="flex basis-2/6">
              <span className="ml-auto text-blue-900 font-semibold text-sm">12:00 PM</span>
            </div>
          </div>

 
          <div className="flex flex-row items-center bg-blue-100 rounded-xl px-3 py-2 mb-2">
            <div className="flex items-center justify-center basis-1/6">
              <span className="rounded-full bg-white"
                    style={{ width: 24, height: 24, boxShadow: 'inset 0 0 0 2px #e2e8f0' }} />
            </div>
            <div className="flex basis-3/6">
              <span className="text-gray-700">go to grocery store</span>
            </div>
            <div className="flex basis-2/6">
              <span className="ml-auto text-blue-900 font-semibold text-sm">1:00 PM</span>
            </div>
          </div>

       
          <div className="flex flex-row items-center bg-blue-100 rounded-xl px-3 py-2 mb-2">
            <div className="flex items-center justify-center basis-1/6">
              <span className="rounded-full bg-white"
                    style={{ width: 24, height: 24, boxShadow: 'inset 0 0 0 2px #e2e8f0' }} />
            </div>
            <div className="flex basis-3/6">
              <span className="text-gray-700">run 5 kilometers</span>
            </div>
            <div className="flex basis-2/6">
              <span className="ml-auto text-blue-900 font-semibold text-sm">4:20 PM</span>
            </div>
          </div>

         +
          <div className="flex flex-row items-center bg-blue-100 rounded-xl px-3 py-2 mb-2">
            <div className="flex items-center justify-center basis-1/6">
              <span className="rounded-full bg-white"
                    style={{ width: 24, height: 24, boxShadow: 'inset 0 0 0 2px #e2e8f0' }} />
            </div>
            <div className="flex basis-3/6">
              <span className="text-gray-700">load the dishwasher</span>
            </div>
            <div className="flex basis-2/6">
              <span className="ml-auto text-blue-900 font-semibold text-sm">9:00 PM</span>
            </div>
          </div>

       
          <div className="flex flex-row items-center bg-blue-100 rounded-xl px-3 py-2">
            <div className="flex items-center justify-center basis-1/6">
              <span className="rounded-full bg-white"
                    style={{ width: 24, height: 24, boxShadow: 'inset 0 0 0 2px #e2e8f0' }} />
            </div>
            <div className="flex basis-3/6">
              <span className="text-gray-700">Take out the trash</span>
            </div>
            <div className="flex basis-2/6">
              <span className="ml-auto text-blue-900 font-semibold text-sm">9:00 AM</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

