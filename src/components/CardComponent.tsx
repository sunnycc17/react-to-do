export default function CardComponent() {
  return (
    <div className="relative flex flex-col justify-center items-center w-auto p-8 shadow-lg z-30 rounded-2xl backdrop-blur-lg bg-white/60 border border-red-200/40 space-y-6 ">
      {/* To-Do Header */}
      <h5 className="w-full text-center text-lg font-medium tracking-wide text-red-700 bg-white rounded-lg py-2 shadow-md border border-red-300">
        Your To Do List
      </h5>

      {/* Inspo Text */}
      <div className="text-red-600 text-sm italic flex">
        Stay productive, stay blossoming!
        <img src="/react-to-do/camellia.png" className="w-6 " />
      </div>

      {/* Input & Add Button */}
      <div className="flex items-center w-full max-w-sm bg-white/70 rounded-lg p-3 border border-red-300 focus-within:ring-2 focus-within:ring-red-500 shadow-md">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-full bg-transparent outline-none text-red-700 placeholder-red-400 px-2"
        />
        <button className="ml-3 bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105 active:scale-95">
          Add
        </button>
      </div>
    </div>
  );
}
