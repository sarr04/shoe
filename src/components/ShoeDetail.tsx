import nike1 from "../assets/n1-min.png";
import { Select } from "./Select";
import { QTY, SIZES } from "../constant";
export function ShoeDetail() {
  return (
    <div className="flex flex-col  lg:flex-row-reverse space-y-4 ">
      <div className="flex-1 lg:-mt-32  lg:ml-28">
        <div className="  flex-center h-full bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6] ">
          <img className="animate-float" src={nike1} />
        </div>
      </div>

      <div className="flex-1 space-y-6 ">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max</div>

        <div className="font-medium md:text-xl">
          {"The Nike Air Max 270 is a lifestyle shoe that's sure to turn "}
        </div>
        <div className="flex">
          <div className="text-3xl font-extrablod md:text-6xl">100$</div>
          <Select title={"SIZES"} options={SIZES} />
          <Select title={"QTY"} options={QTY} />

          <div className="space-x-10">
            <button className=" btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
              {" "}
              Add To Bag
            </button>
            <a
              href="#"
              className="text-lg font-bold underline underline-offset-4"
            >
              view details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
