import Image from "next/image";
import { LuCalendarDays } from "react-icons/lu";
import { PiLinkSimple } from "react-icons/pi";
import { HiMiniBars2 } from "react-icons/hi2";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { LuNotebookPen } from "react-icons/lu";
import { MdCheck } from "react-icons/md";


export default function Home() {
  return (

    <div className="m-auto flex flex-col justify-between h-screen w-5/12 border-2 border-[#E1E4E8]">
      <div className="flex border-b-2 border-[#E1E4E8] h-16 w-full justify-around items-center">
        <p className="text-[#899097]">Untitled Form</p>
        <button className="text-[#899097] border-2 py-1 px-4 border-[#E1E4E8] rounded-xl flex items-center gap-1">
          <span>Preview</span>
          <FiArrowUpRight />

        </button>
      </div>
      <main className="p-4">
        <div className=" border-2 border-[#E1E4E8] w-full rounded-2xl p-3">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base">Explain in a single sentence, why you are the best fir for this role?</p>
            <div className="flex gap-1">
              <HiMiniBars2 />
              <MdKeyboardArrowDown />
              <RxDragHandleDots2 />
            </div>
          </div>
          <input type="text"
            disabled
            className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-8" />
        </div>
        <div className=" border-2 border-[#E1E4E8] w-full rounded-2xl p-3 mt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-base">What is your preferred frontend framework?</p>
              <p className=" text-sm">Which frontend framework do you prefer working with?</p>
            </div>

            <div className="flex gap-1">
              <HiMiniBars3BottomLeft />
              <MdKeyboardArrowDown />
              <RxDragHandleDots2 />
            </div>
          </div>
          <input type="text"
            disabled
            className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-20" />
        </div>
        <div className=" border-2 border-[#E1E4E8] w-full rounded-2xl p-3 mt-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-base">What is your preferred frontend framework?</p>
              <p className=" text-sm">Which frontend framework do you prefer working with?</p>
            </div>

            <div className="flex gap-1">
              <MdOutlineRadioButtonChecked />
              <MdKeyboardArrowDown />
              <RxDragHandleDots2 />
            </div>
          </div>
          <div className="mt-2 text-sm ">
            <label className="flex items-center gap-2 ">
              <input
                type="radio"
                name="frontend-framework"
                disabled
                className="h-5 w-5 border-2 rounded-md border-[#E1E4E8]"
              />
              React
            </label>

            <label className="flex items-center gap-2 mt-1">
              <input
                type="radio"
                name="frontend-framework"
                disabled
                className="h-5 w-5 border-2 rounded-md border-[#E1E4E8]"
              />
              Angular
            </label>
          </div>

        </div>

        <div className=" border-2 border-[#E1E4E8] w-full rounded-2xl p-3 mt-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base">What would be your tentative joining date?</p>
            <div className="flex gap-1">
              <HiMiniBars2 />
              <MdKeyboardArrowDown />
              <RxDragHandleDots2 />
            </div>
          </div>
          <input type="date"
            // disabled
            className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-8" />
        </div>
        <div className=" border-2 border-[#E1E4E8] w-full rounded-2xl p-3 mt-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-base">What would be your tentative joining date?</p>
            <div className="flex gap-1">
              <PiLinkSimple />
              <MdKeyboardArrowDown />
              <RxDragHandleDots2 />
            </div>
          </div>
          <input type="text"
            className="w-full border-2 rounded-md border-[#E1E4E8] mt-2 h-8" />
        </div>
      </main >
      <footer className="flex border-t-2 border-[#E1E4E8] h-16 w-full justify-around gap-4 items-center">
        <button className="text-[#899097] border-2 py-1 px-4 border-[#E1E4E8] rounded-xl flex items-center gap-1">
          <LuNotebookPen />

          <span>Save as Draft</span>
        </button>
        <button className="text-[#ffffff] border-2 border-[#8cc7a7] py-1 px-4  rounded-xl bg-[#8cc7a7] flex items-center justify-around gap-1">
          <MdCheck />
          <span>Publish form</span>

        </button>
      </footer>
    </div >
    // </div >
  );
}
