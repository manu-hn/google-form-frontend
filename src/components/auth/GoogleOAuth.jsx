import {GoogleAuthProvider } from '@firebase/auth'

const GoogleOAuth = () => {

    const handleGoogleOAuthClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button className="text-blue-600" onClick={handleGoogleOAuthClick} type="button"
        >Continue With Google</button>
    )
}

export default GoogleOAuth