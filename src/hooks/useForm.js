import { useState } from 'react';

// Hook personalizado para manejar el estado de un formulario
export const useForm = (initialForm = {}) => {
  
    // Estado inicial del formulario, inicializado con el objeto initialForm
    const [formState, setFormState] = useState(initialForm);

    // Función para manejar cambios en los campos del formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        // Actualiza el estado del formulario con el nuevo valor del campo modificado
        setFormState({
            ...formState,
            [name]: value // Actualiza el campo específico del formulario
        });
    }

    // Función para resetear el formulario al estado inicial
    const onResetForm = () => {
        setFormState(initialForm); // Restablece el estado del formulario al estado inicial
    }

    // Devuelve el estado actual del formulario, las funciones para manejar cambios y resetear el formulario
    return {
        ...formState, // Proporciona acceso a cada campo del formulario individualmente
        formState, // Proporciona acceso al estado completo del formulario
        onInputChange, // Función para manejar cambios en los campos del formulario
        onResetForm, // Función para resetear el formulario al estado inicial
    }
}