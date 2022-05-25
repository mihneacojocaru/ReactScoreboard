export default function validateInfo(values){
    let errors = {};

    if(!values.name.trim()){
        errors.name = "Name erforderlich"
    }

    if(!values.email){
        errors.email = "Email erforderlich"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Bitte geben Sie eine gültige e-Mail Adresse ein"
    }

    if(!values.message.trim()){
        errors.message = "Nachricht erforderlich"
    }

    return errors;
}