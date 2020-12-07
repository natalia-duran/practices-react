import React, {useState} from 'react';

const FormWithHooks = () => {

    const [formState, setFormState] = useState({
        formValues: {
            username: '',
            password: ''
        }
    }); 

    const handleChange = ({ target }) => {
        const inputValue = target.value;
        const { formValues } = formState;
        formValues[target.name] = inputValue;
        setFormState({ formValues });
        console.log('Form values', formValues);
    }

    return (
        <div>
            <h3>Form With Hooks (also a controlled component)</h3>
            <form>
                <label>
                    Username
                    <input type="text" name='username' value={formState.formValues.username} onChange={handleChange} />
                </label>

                <label>
                    Password
                    <input type="password" name='password' value={formState.formValues.password} onChange={handleChange} />
                </label>

                <input type='submit' value="Submit" />
            </form>
        </div>
    )
}

export default FormWithHooks;
