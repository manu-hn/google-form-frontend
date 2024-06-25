import GoogleOAuth from "./GoogleOAuth"


const PleaseSignIn = () => {
    return (
        <section className="w-full h-[100vh] flex items-center justify-center ">
            <div className="h-[25rem] w-[55rem] flex  justify-around items-center border bg-[#fdfcfc] rounded-2xl">
                <div>

                    <p className="text-orange-800">It seems like you are not Signed in, </p>
                    <p>Sign in
                        to continue to Forms</p>
                </div>

                <div className=" w-[12em] flex justify-center items-center h-[2.5em] bg-blue-800 rounded-lg">
                    <GoogleOAuth title="Sign In with Google" classNames="text-white" />
                </div>
            </div>
        </section>
    )
}

export default PleaseSignIn