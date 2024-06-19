import { FIRST_PAGE_FIELDS} from "@constants/Constants.js";
import HeaderSection from "@components/header";
import GoogleForm from "./GoogleForm";

const Container = () => {

    return (
        <div className="w-full h-full bg-[#E6F6F9] flex justify-center border-4 text-[1vw]">
            <section className="mx-auto flex flex-col justify-center items-center ">
                <HeaderSection />
               
                <GoogleForm formDetails={FIRST_PAGE_FIELDS} />
                {/* <GoogleForm formDetails={SECOND_PAGE_FIELDS} />
                <GoogleForm formDetails={THIRD_PAGE_RESULTS} /> */}
            </section>
        </div>
    )
}

export default Container