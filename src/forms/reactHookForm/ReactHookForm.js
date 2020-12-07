import React from 'react';

// 1. Import the library
import { useForm } from "react-hook-form";

const ReactHookForm = () => {

    // 2. Destructure the properties needed from the useForm method 
    const { register, handleSubmit, errors } = useForm();

    // 3. Use the onSubmit attribute in the form tag and create the onSubmit handler
    const onSubmit = (data) => {
        console.log(data)
    }

    // 4. Use refs and the register method with every input tag (to make this an uncontrolled component)

    return (
        <div>
            <h3>React Hook Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='username'
                    ref={ register }
                />

                <input 
                    name='password'
                    ref={
                        register({ required: { value: true, messsage: 'this is required' } })
                    }
                />
                {errors.password && <span>This field is required</span>}
                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default ReactHookForm;
