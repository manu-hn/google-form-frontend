import { app } from '@/constants/firebase';
import { loginUserFailure, loginUserInitiated, loginUserSuccessful } from '@/store/slices/userSlice';
import { GoogleAuthProvider, getAuth, signInWithPopup, } from 'firebase/auth';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const GoogleOAuth = ({ title }) => {
    const dispatch = useDispatch()

    const handleGoogleOAuthSignIn = async () => {
        try {
            const authProvider = new GoogleAuthProvider();
            const auth = getAuth(app);
            dispatch(loginUserInitiated())
            const resultsFromGoogle = await signInWithPopup(auth, authProvider);
            console.log(resultsFromGoogle);

            const { user } = resultsFromGoogle;
            console.log(user);

            const userDetails = {
                email: user.email, name: user.displayName
            }
            dispatch(loginUserSuccessful(userDetails))

        } catch (error) {
            console.log(error);
            dispatch(loginUserFailure());
        }
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