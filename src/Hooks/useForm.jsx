import { useState } from 'react'; // Importa el hook useState de React para manejar el estado.

export const useForm = ( initialForm = {} ) => { // Define un hook personalizado llamado useForm que recibe un formulario inicial como parámetro.
  
    const [ formState, setFormState ] = useState( initialForm ); // Declara un estado llamado formState y su función para actualizarlo, inicializado con initialForm.

    const onInputChange = ({ target }) => { // Define una función para manejar los cambios en los inputs del formulario.
        const { name, value } = target; // Extrae el nombre y el valor del input que disparó el evento.
        setFormState({ // Actualiza el estado del formulario.
            ...formState, // Mantiene los valores actuales del formulario.
            [ name ]: value // Actualiza el campo específico con el nuevo valor.
        });
    }

    const onResetForm = () => { // Define una función para reiniciar el formulario a su estado inicial.
        setFormState( initialForm ); // Restaura el estado inicial del formulario.
    }

    return { // Retorna un objeto con el estado del formulario y las funciones para manejarlo.
        ...formState, // Retorna todos los valores actuales del formulario como propiedades individuales.
        formState, // Retorna el estado completo del formulario.
        onInputChange, // Retorna la función para manejar cambios en los inputs.
        onResetForm, // Retorna la función para reiniciar el formulario.
    }
}