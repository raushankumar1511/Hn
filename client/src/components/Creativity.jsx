const Creativity = () => {
  return (
    <div className=" flex justify-between m-4 sm:m-8 md:m-12 lg:m-16 xl:m-20 bg-lightYellow h-full rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16">
      <div className="mr-20">3D</div>
      <div className="">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          PAY-LESS
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black ">
          SALE NOW
        </h1>
        <p className="text-dullBalck font-poppins leading-normal  ">
          Spend minimal RS 1000 get 15% off in
        </p>
        <p className="text-dullBalck font-poppins leading-normal">your order</p>

        <button className="bg-black w-36 sm:w-60 md:w-72 lg:w-80 h-14 font-semibold text-white mt-6 rounded-lg ml-4 sm:ml-8 md:ml-8 lg:ml-8 transition-bg transition-text duration-200 hover:bg-yellow-300 hover:text-black">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};
export default Creativity;
