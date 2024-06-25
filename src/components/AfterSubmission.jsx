import { HEAD_TEXT } from "@/constants/Config"
import { Link } from "react-router-dom"


const AfterSubmission = () => {
    return (
        <section className="w-full h-[100vh] flex justify-center  ">
            <div className="w-2/4 h-[10em] overflow-hidden my-16 bg-white rounded-lg">
                <span className="w-full block h-4 bg-[#83D3E0]"></span>
                <div className="flex flex-col justify-around px-8  h-full py-6">
                    <h4 className="font-semibold text-2xl">{HEAD_TEXT}</h4>
                    <p className=" ">Thank you for filling out the form. Our team will review the details and contact you soon.</p>
                    <Link className="text-blue-500 font-semibold" to={'/form'}><p>Submit Another response</p></Link>
                </div>
            </div>
        </section>
    )
}

export default AfterSubmission