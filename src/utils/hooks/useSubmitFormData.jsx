import { config } from '@/constants/StateValues';
import axios from 'axios';

const useSubmitFormData = () => {

    async function submitFormData(values) {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/form/submit`, JSON.stringify(values), config);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    return {
        submitFormData,
    }

}

export default useSubmitFormData;