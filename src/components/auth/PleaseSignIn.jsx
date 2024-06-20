import GoogleOAuth from "./GoogleOAuth"


const PleaseSignIn = () => {
    return (
        <section className="w-full h-[100vh] flex items-center justify-center">
            <div className="h-[5rem] w-[25.5rem] flex flex-col justify-center items-center">
                <p className="text-orange-800">It seems like you are not Signed in Please Sign In to Continue.</p>

                <GoogleOAuth title="Sign In" />
            </div>
        </section>
    )
}

export default PleaseSignIn