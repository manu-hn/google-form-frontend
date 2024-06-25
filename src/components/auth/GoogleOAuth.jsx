import { config } from '@/constants/Config.js';
import { app } from '@/constants/firebase';
import { loginUserFailure, loginUserInitiated, loginUserSuccessful } from '@/store/slices/userSlice';
import axios from 'axios';
import { GoogleAuthProvider, getAuth, signInWithPopup, } from 'firebase/auth';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GoogleOAuth = ({ title }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleOAuthSignIn = async () => {
        try {
            const authProvider = new GoogleAuthProvider();
            const auth = getAuth(app);
            dispatch(loginUserInitiated())
            const resultsFromGoogle = await signInWithPopup(auth, authProvider);

            const { user } = resultsFromGoogle;
            const userDetails = {
                email: user.email, name: user.displayName
            }
            await userSignIn(userDetails);

        } catch (error) {
            console.log(error);
            dispatch(loginUserFailure());
        }
    }

    async function userSignIn(userDetails) {

        console.log(userDetails)
        const userData = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/google-sign-in`, JSON.stringify(userDetails), config);
        console.log(userData)
        dispatch(loginUserSuccessful(userDetails));
        navigate('/form')
    }
    return (
        <button className="text-blue-600" onClick={handleGoogleOAuthSignIn} type="button"
        >{title}</button>
    )
}
GoogleOAuth.propTypes = {
    title: PropTypes.string,
}

export default GoogleOAuth;