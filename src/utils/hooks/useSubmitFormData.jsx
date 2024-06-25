import { AUTO_HIDE_DURATION, FORM_SUBMISSION_MESSAGE, config } from '@/constants/Config.js';
import axios from 'axios';
import { useSnackbar } from 'notistack'

const useSubmitFormData = () => {
    const { enqueueSnackbar } = useSnackbar()
    async function submitFormData(values) {
        console.log(values)
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/submit`, JSON.stringify(values), config);
            console.log(response);
            (() => enqueueSnackbar(FORM_SUBMISSION_MESSAGE,  { autoHideDuration: AUTO_HIDE_DURATION, variant: 'success' }))();

        } catch (error) {
            console.log(error)
        }
    }

    return {
        submitFormData,
    }

}

export default useSubmitFormData;