export function ImageDetail({ image }) {
  return (<>
    <div className="flex justify-center place-items-center relative h-[49vh] w-[300px] lg:h-[74vh] lg:w-[550px] md:w-[280px] md:h-[84vh] sm:w-[260px] sm:h-[84vh] ">
      <img
        src={`/art/${image}.png`}
        className="absolute object-cover rounded shadow-lg lg:h-[74vh] lg:w-[500px] h-[49vh] w-[300px] md:w-[280px] md:h-[84vh] sm:w-[260px] sm:h-[84vh]"
      />
    <img
      src={`/art/${image}.jpg`}
        className="absolute object-cover rounded shadow-lg lg:h-[74vh] lg:w-[500px] h-[49vh] w-[300px] md:w-[280px] md:h-[84vh] sm:w-[260px] sm:h-[84vh]"
    />
   
    </div>
  </>
  );
}
