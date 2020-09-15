import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState);

    //Funcion que se ejecuta cada vez que el usuario escribe un input
    const handleChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value
        });
    }

    const reset = () => {
        setvalues(initialState);
    }

    return [values, handleChange, reset];
}
