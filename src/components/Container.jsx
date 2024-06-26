import HeaderSection from "@components/header";
import GoogleForm from "./GoogleForm";
import { useSelector } from "react-redux";
import { useState } from "react";
import { DOCS_ARRAY } from "@/constants/Config";

const Container = () => {
    const [index, setIndex] = useState(0);
    const isFresher = useSelector(state => state.user.isFresher);

    const filteredDocsArray = isFresher
        ? DOCS_ARRAY.filter((_, idx) => idx < 5 || idx === 10)
        : DOCS_ARRAY;

    return (
        <div className="w-full h-full bg-[#E6F6F9] flex justify-center border-4 text-[1vw]">
            <section className="mx-auto w-full flex flex-col justify-center items-center ">
                <HeaderSection />

                <GoogleForm
                    formDetails={filteredDocsArray[index].item}
                    docsLength={filteredDocsArray.length}
                    index={index}
                    setIndexValue={setIndex}
                    pageTitle={filteredDocsArray[index].pageTitle}
                    isFresher={isFresher}
                />
            </section>
        </div>
    );
};

export default Container;
