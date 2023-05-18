export default function LoginPage() {
  return (
    <div className=" h-full flex justify-center items-center">
      <div className="bg-white  p-4 rounded-lg shadow-2xl text-black w-1/2">
        <div>Email</div>
        <div>
          <input className="bg-gray-100 border border-gray-500 w-full p-2 rounded-lg mt-2" />
        </div>
        <div className="mt-2">Password</div>
        <div>
          <input
            type="password"
            className="bg-gray-100 border border-gray-500 w-full p-2 rounded-lg mt-2"
          />
        </div>
        <button
          className="mt-8 py-4
         font-white font-bold bg-blue-500 hover:bg-blue-600 active:bg-blue-700 
         focus:outline-none focus:ring focus:ring-violet-300 w-full rounded-lg shadow-lg text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
