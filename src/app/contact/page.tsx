import Footer from "@/components/Footer";
import Header from "../../components/Header";



export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-200 to-gray-700">
      <div className="relative flex-grow">
        
        <Header />
        <div className="flex items-center justify-center min-h-screen bg-none bg-opacity-15 relative z-10">
          <div className="w-full max-w-md p-8 rounded-lg shadow-2xl bg-transparent">
            <h1 className="text-5xl font-bold font-serif italic mb-10 text-center text-teal-900 underline">
              Contact Us
            </h1>
            <form>
              {['name', 'email', 'your-message'].map((field, index) => (
                <div className="mb-4" key={index}>
                  <label
                    htmlFor={field}
                    className="block text-md font-medium mb-2 text-teal-900 font-serif"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1).replace('-', ' ')}
                  </label>
                  <input
                    type={field.includes('your-message') ? 'your-message' : 'text'}
                    id={field}
                    required
                    className="w-full border border-teal-900 p-2 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 bg-transparent shadow-xl 
                      text-base placeholder:text-sm md:placeholder:text-lg
                      hover:scale-105 hover:shadow-teal-700/50"
                    placeholder={`Enter your ${field.replace('-', ' ')}`}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-teal-400 text-white outline outline-2 outline-offset-2 px-4 py-2 mt-5 rounded-lg transition duration-300 
                hover:bg-slate-600 hover:shadow-xl hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-75 
                active:scale-95 active:ring-0 
                hover:shadow-teal-700/50"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
      
      
    </div>
  );
}

