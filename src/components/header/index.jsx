import { DESCRIPTIVE_HEADER_TEXT, HEAD_TEXT, REQUIRED_INDICATE_TEXT, SUBMIT_DESCRIPTIVE_TEXT } from "@/constants/Config.js";
import GoogleFormImage from "../../assets/images/Google Form Image.png";
import GoogleOAuth from "../auth/GoogleOAuth";
import {  useSelector } from "react-redux";

const HeaderSection = () => {

    const { userInfo } = useSelector((store) => store.user);
 
    return (
        <section className="w-3/4 md:w-[55%] flex flex-col items-center justify-center my-4 text-[1vw]">
            <img src={GoogleFormImage} alt="Google Form Image" className="w-full rounded-md" />
            <div className="w-full bg-white mt-3 rounded-lg overflow-hidden">
                <span className="block w-full h-3  bg-[#83D3E0]"></span>

                <h1 className="font-semibold  text-lg md:text-[2.5em] sm:text-3xl mx-4 my-3">{HEAD_TEXT}</h1>
                <h4 className="font-semibold  text-[0.65rem] md:text-[1rem] text-justify italic mx-4">{DESCRIPTIVE_HEADER_TEXT}</h4>

                <span className="block w-full h-[0.04em] my-3 bg-[#d3d2d2]"></span>

                <div className="px-4 mb-4 flex ">
                    <p className="font-bold text-[0.55rem] md:text-[1rem]  text-gray-500 mr-4">{userInfo?.email}</p>
                    <GoogleOAuth title="Switch Accounts" classNames="text-blue-600 font-semibold text-[0.5rem] md:text-[0.9rem] " />
                </div>

                <h4 className="font-[400] text-[#343434] mx-4 text-[0.55rem] md:text-[0.875rem]">{SUBMIT_DESCRIPTIVE_TEXT}</h4>
                <span className="block w-full h-[0.04em] my-3 bg-[#d3d2d2]"></span>
                <p className="px-4 mt-2 mb-4 text-red-600">{REQUIRED_INDICATE_TEXT}</p>
            </div>
        </section>
    )
}

export default HeaderSection