
import HeaderSection from "@components/header";
import GoogleForm from "./GoogleForm";
import { useState } from "react";
import { DOCS_ARRAY } from "@/constants/Config";

const Container = () => {
    const [index, setIndex] = useState(0)
   

    return (
        <div className="w-full h-full bg-[#E6F6F9] flex justify-center border-4 text-[1vw]">
            <section className="mx-auto  w-full flex flex-col justify-center items-center ">
                <HeaderSection />

                <GoogleForm formDetails={DOCS_ARRAY[index].item}
                    docsLength={DOCS_ARRAY.length} index={index}
                    setIndexValue={(value) => setIndex(value)}
                    pageTitle={DOCS_ARRAY[index].pageTitle} />

            </section>
        </div>
    )
}

export default Container