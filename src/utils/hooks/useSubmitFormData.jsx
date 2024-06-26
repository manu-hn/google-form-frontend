import { AUTO_HIDE_DURATION, NAVIGATE_DURATION, config } from '@/constants/Config.js';
import { formSubmissionSuccess, formSubmissionFailure, formSubmissionStarted } from '@/store/slices/userSlice';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const useSubmitFormData = () => {
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const dispatch = useDispatch();


    async function submitFormData(values) {
        dispatch(formSubmissionStarted());
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/submit`, JSON.stringify(values), config);

            (() => enqueueSnackbar(response?.data?.message, { autoHideDuration: AUTO_HIDE_DURATION, variant: 'success' }))();
            dispatch(formSubmissionSuccess());
            setTimeout(() => {
                navigate('/submitted')
            }, NAVIGATE_DURATION)

        } catch (error) {
            dispatch(formSubmissionFailure());
            console.log(error)
        }
    }

    return {
        submitFormData,
    }

}

export default useSubmitFormData;