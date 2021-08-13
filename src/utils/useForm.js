import { useState } from 'react';
import validateKnowledge from './validateKnowledge';
export default function useForm(initialState = {}, onSubmit) {
    const [formData, setFormData] = useState(initialState);
    const [errors, updateErrors] = useState({})



    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        console.log(formData)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateErrors(validateKnowledge(formData))
        onSubmit?.(formData);
    }
    return { formData, errors, handleInputChange, handleSubmit }    
}