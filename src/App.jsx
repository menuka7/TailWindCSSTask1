function App() {
  return (
    <div className="outer bg-[#9e9e9e] min-h-screen flex justify-center items-center">
      <div className="card w-[900px] h-[750px] bg-white flex shadow-lg shadow-gray-500">
        <div className="card-left w-[30%] bg-black bg-[url('https://static.vecteezy.com/system/resources/previews/007/078/797/non_2x/seamless-summer-icons-pattern-doodle-with-summer-icons-on-black-background-vintage-summer-icons-free-vector.jpg')] bg-cover"></div>
        <div className="card-right w-[70%] flex flex-col">
          <div className="header-img w-[100%] h-[200px] bg-[url('/profile.jpg')] bg-cover bg-center"></div>
          <div className="content p-[30px] flex flex-col gap-[4px]">
            <p className="role font-[12px] text-gray-500 font-bold">STUDENT</p>
            <h1 className=" text-[#ff6a00] font-medium text-2xl">
              Menuka <span className="text-[#ff6a00] font-bold"> Magar </span>
            </h1>
            <h3 className="font-[12px] text-gray-500 font-bold ">PROFILE</h3>
            <p className="font-[14px] text-[#555]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              enim.
            </p>
            <h3 className="font-[12px] text-gray-500 font-bold">PARTNERS</h3>
            <p className="font-[14px] text-[#555]">Partner 01</p>
            <p className="font-[14px] text-[#555]">Partner 02</p>
            <p className="font-[14px] text-[#555]">Partner 03</p>
          </div>
          <div className="block mt-[20px] flex gap-[16px] px-[26px]">
            <div
              className="bg-[#ff6a00] text-white h-[120px] w-[160px]
            flex flex-col items-center justify-center text-center"
            >
              <h4 className="text-lg font-semibold">530 K+</h4>
              <p className="text-sm">Followers</p>
            </div>

            <div
              className="bg-[#ff6a00] text-white h-[120px] w-[160px]
            flex flex-col items-center justify-center text-center"
            >
              <h4 className="text-lg font-semibold">100 K+</h4>
              <p className="text-sm">Subscribers</p>
            </div>
            <div
              className="bg-[#ff6a00] text-white h-[120px] w-[160px]
            flex flex-col items-center justify-center text-center"
            >
              <h4 className="text-lg font-semibold">1 M</h4>
              <p className="text-sm">Page Views</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
