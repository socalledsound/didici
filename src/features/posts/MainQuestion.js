import React from 'react'
import useForm from '../../utils/useForm'
import TextArea from '../../components/TextArea/TextArea';
import styles from './MainQuestion.module.css'


const submitFormData = (data) => {
    console.log(data);
}


const MainQuestion = () => {

    const { formData, errors, handleInputChange, handleSubmit } = useForm({knowledge: ''}, (formData) => submitFormData(formData))

    const { knowledge } = formData
    return ( 
        <div className={styles.questionContainer}>
            
            <form onSubmit={handleSubmit}>
                <TextArea 
                    value={knowledge}
                    required
                    name='knowledge'
                    onChange={handleInputChange}
                    error={errors.knowledge}
                    placeholder='enter a brief summary of something you learned today'
                />
                <button className={styles.submitButton} type='submit'>submit</button>
            </form>
        </div>
     );
}
 
export default MainQuestion;