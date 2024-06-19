import { DESCRIPTIVE_HEADER_TEXT, HEAD_TEXT, REQUIRED_INDICATE_TEXT, SUBMIT_DESCRIPTIVE_TEXT } from "@/constants/Constants";
import GoogleFormImage from "../../assets/images/Google Form Image.png";

const HeaderSection = () => {
    return (
        <section className=" flex flex-col items-center justify-center my-4 text-[1vw]">
            <img src={GoogleFormImage} alt="Google Form Image" className="w-3/5 rounded-md" />
            <div className="w-3/5 bg-white mt-3 rounded-lg overflow-hidden">
                <span className="block w-full h-3  bg-[#83D3E0]"></span>

                <h1 className="font-semibold  text-[2.5em] sm:text-3xl mx-4 my-3">{HEAD_TEXT}</h1>
                <h4 className="font-semibold italic mx-4">{DESCRIPTIVE_HEADER_TEXT}</h4>

                <span className="block w-full h-[0.04em] my-3 bg-[#d3d2d2]"></span>

                <div className="px-4 mb-4">Manuhulikere</div>

                <h4 className="font-[400] text-[#343434] mx-4">{SUBMIT_DESCRIPTIVE_TEXT}</h4>
                <span className="block w-full h-[0.04em] my-3 bg-[#d3d2d2]"></span>
                <p className="px-4 mt-2 mb-4 text-red-600">{REQUIRED_INDICATE_TEXT}</p>
            </div>
        </section>
    )
}

export default HeaderSection