import { FIRST_PAGE_FIELDS, ADDRESS_INFORMATION_FIELDS, IDENTIFICATION_DOCUMENTS, PROFESSIONAL_LINKS_AND_DOCUMENTS, EDUCATIONAL_DETAILS, ACKNOWLEDGEMENT_CONSENT } from "@constants/Constants.js";
import HeaderSection from "@components/header";
import GoogleForm from "./GoogleForm";
import { useState } from "react";

const Container = () => {
    const [index, setIndex] = useState(0)
    const DOCS_ARRAY = [
        {
            id: "1doc",
            pageTitle: "",
            item: FIRST_PAGE_FIELDS,
        },
        {
            id: "2doc",
            pageTitle: "ADDRESS INFORMATION FIELDS",
            item: ADDRESS_INFORMATION_FIELDS,
        },
        {
            id: "3doc",
            pageTitle: "IDENTIFICATION DOCUMENTS",
            item: IDENTIFICATION_DOCUMENTS,
        },
        {
            id: "4doc",
            pageTitle: "PROFESSIONAL LINKS AND DOCUMENTS",
            item: PROFESSIONAL_LINKS_AND_DOCUMENTS,
        },
        {
            id: "5doc",
            pageTitle: "EDUCATIONAL DETAILS",
            item: EDUCATIONAL_DETAILS,
        },
        {
            id: "6doc",
            pageTitle: "ACKNOWLEDGEMENT CONSENT",
            item: ACKNOWLEDGEMENT_CONSENT,
        },

    ];



    return (
        <div className="w-full h-full bg-[#E6F6F9] flex justify-center border-4 text-[1vw]">
            <section className="mx-auto flex flex-col justify-center items-center ">
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