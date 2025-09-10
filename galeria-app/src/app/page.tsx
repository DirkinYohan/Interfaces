import Image from "next/image";
import { Circle, Layout, Play, Shirt, Dumbbell } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-indigo-50 p-4 md:p-8">
      <section className="max-w-6xl mx-auto flex flex-col gap-6">
    
        <section className="flex flex-col lg:flex-row gap-6">
          {/* Columna izquierda */}
          <article className="flex-1 flex flex-col gap-6">
            <header className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl p-6 h-full">
              <figure className="md:w-1/3 w-full">
                <Image
                  src="/lamp.jpg"
                  alt="Lamp"
                  width={1000}
                  height={400}
                  className="rounded-xl object-cover w-full h-50 md:h-full"
                />
              </figure>
              <section className="flex-1 gap-5 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-lg md:text-xl font-semibold mb-2 text-black">
                  Green plants are going to Extinct about 500 times faster than
                  they should, Study finds
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  If you are the sort of person who just can not keep a plant
                  alive, you are not alone according to a new study published
                  June 10 in the journal Nature..
                </p>
                <footer className="flex items-center gap-2 text-sm text-gray-600 mt-55">
                  <Image
                    src="/John.jpg"
                    alt="Alexander Parkinson"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <address className="not-italic grid">
                    <span className="font-bold text-black">
                      Alexander Parkinson
                    </span>
                    <time dateTime="2019-06-20">Jun 20, 2019</time>
                  </address>
                </footer>
              </section>
            </header>
          </article>

    
          <aside className="lg:w-1/5 flex flex-col gap-6">
            <nav className="bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-6 h-full">
              {/* Global */}
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <Circle size={20} />
                </span>
                <span className="text-gray-600 font-medium">Global</span>
              </button>

             
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <Layout size={20} />
                </span>
                <span className="text-gray-600 font-medium">Business</span>
              </button>

        
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <Play size={20} />
                </span>
                <span className="text-gray-600 font-medium">Entertainment</span>
              </button>

          
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl bg-indigo-500 text-white shadow-md transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-600">
                  <Shirt size={20} />
                </span>
                <span className="font-semibold">Sports</span>
              </button>

            
              <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
                <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600">
                  <Dumbbell size={20} />
                </span>
                <span className="text-gray-600 font-medium">Health</span>
              </button>
            </nav>
          </aside>
        </section>

     
        <section className="flex flex-col lg:flex-row gap-6 ">
  
          <article className="flex-[0.8] bg-white rounded-2xl p-6 flex flex-col h-full shadow-2xl">
            <figure>
              <Image
                src="/coffee.jpg"
                alt="Coffee"
                width={600}
                height={400}
                className="rounded-xl mb-4 object-cover w-full h-60"
              />
            </figure>
            <h3 className="font-semibold mb-2 text-black">
              How to make the perfect morning coffee, according to the Science
            </h3>
            <footer className="flex items-center gap-2 text-sm text-gray-600 mt-2">
              <Image
                src="/Scarlett.jpg"
                alt="scarlett johansson"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span>
                Tara Gibson • <time dateTime="2019-07-13">Jul 13, 2019</time>
              </span>
            </footer>
          </article>

          <section className="flex-[3] flex flex-col gap-6">
           
            <section className="flex flex-col md:flex-row gap-6">
             
              <form className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col h-40">
                <label htmlFor="search" className="sr-only">
                  Search articles
                </label>
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <input
                    id="search"
                    type="text"
                    placeholder="Search for articles"
                    className="flex-1 p-2 text-sm outline-none text-black"
                  />
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2">🔍</button>
                </div>

                <menu className="flex flex-wrap gap-2 mt-4 text-gray-600">
                  <li className="px-2 py-1 bg-gray-100 rounded">#Politics</li>
                  <li className="px-2 py-1 bg-gray-100 rounded">#Science</li>
                  <li className="px-2 py-1 bg-gray-100 rounded">#Movies</li>
                  <li className="px-2 py-1 bg-gray-100 rounded">#Technology</li>
                </menu>
              </form>

             
              <article className="bg-white rounded-2xl shadow-2xl p-5 flex-1 flex gap-2 h-40">
                <figure>
                  <Image
                    src="/Real-Estate.jpg"
                    alt="Short film"
                    width={400}
                    height={200}
                    className="rounded-xl object-cover w-60 h-30"
                  />
                </figure>
                <section className="flex-col gap-2">
                  <h2>▶</h2>
                  <h3 className="font-semibold mb-2 text-black">An Inspiring Short Film</h3>
                  <p className="text-sm text-gray-500">👁 80,989</p>
                </section>
              </article>
            </section>

            <section className="flex gap-5">
              <aside className="flex-[20] flex flex-col sm:flex-row bg-white rounded-2xl shadow-2xl p-4">
                <figure className="sm:w-1/3 w-full flex justify-center">
                  <Image
                    src="/Alex.jpg"
                    alt="Alex Morrison"
                    width={300}
                    height={300}
                    className="rounded-2xl object-cover h-36 sm:h-48 w-full sm:w-auto"
                  />
                </figure>

                <section className="flex-1 sm:ml-4 mt-3 sm:mt-0 flex flex-col">
                  <header>
                    <h3 className="font-semibold text-black">Alex Morrison</h3>
                    <p className="text-sm text-gray-500">Senior Journalist</p>
                  </header>

                  <section className="bg-gray-50 rounded-xl p-3 mt-3">
                <ul className="flex justify-around text-sm text-gray-600">
                  <li className="flex flex-col items-center">
                    <span>Articles</span>
                   <strong className="text-xl font-bold text-black">34</strong>
                  </li>

                  <li className="flex flex-col items-center">
                    <span>Followers</span>
                    <strong className="text-xl font-bold text-black">980</strong>
                  </li>
                 <li className="flex flex-col items-center">
                  <span>Rating</span>
                  <strong className="text-xl font-bold text-black">8.9</strong>
                </li>
              </ul>
            </section>
   
                  <section className="justify-center flex gap-5 mt-3">
                    <button className="bg-white text-black rounded-xl px-4 py-2 self-start border-1 border-black w-30">
                      Chat
                    </button>
                    <button className="bg-blue-500 text-white rounded-xl px-4 py-2 self-start w-30">
                      Follow
                    </button>
                  </section>
                </section>
              </aside>

              
              <section className="flex flex-col gap-6">
                
                <nav className="flex items-center justify-center gap-4">
                  <button className="bg-white rounded-full shadow-2xl w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                    ⬅
                  </button>
                  <button className="bg-white rounded-full shadow-2xl w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100">
                    ➡
                  </button>
                </nav>

                <menu className="col-span-2 bg-white rounded-2xl shadow-2xl p-4 flex flex-col gap-2">
 
                <div className="flex flex-wrap gap-2">
                  <li className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">Donald Trump</li>
                  <li className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">USA</li>
                </div>

                <div className="flex flex-wrap gap-2">
                  <li className="px-3 py-1 bg-gray-100 rounded text-sm text-gray-600">Politics</li>
                  <li className="px-3 py-1 bg-blue-100 text-blue-600 rounded text-sm font-medium">2020</li>
                </div>
                </menu>

              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
