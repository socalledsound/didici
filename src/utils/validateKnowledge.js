export default function validateKnowledge(values){
    let errors = {}
    if(!values.knowledge){
        errors.knowledge = 'enter something that you learned today'
    }
    return errors
}