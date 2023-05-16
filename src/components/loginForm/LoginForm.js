import React, { useState } from 'react'

function LoginForm() { // crea el estado utilizando useState para mantener un seguimiento de los valores ingresados en los campos de inicio de sesión.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event) => { //para actualizar el estado cuando los campos cambien.
        const { name, value } = event.target;
        if (name === 'email') {
            setEmail(value);

        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleSubmit = (event) => { //es para manejar el evento de envío del formulario
        event.preventDefault();
        console.log('Correo electrónico:', email);
        console.log('Contraseña:', password);
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <div className='emailStile'>Correo electrónico:</div>
                <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <br />
            <label>
                <div className='passwordStile'>Contraseña:</div>
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <br />
            <button type="submit" className='startButton'>Iniciar sesión</button>
            <button type="reset" className='restartButton' onSubmit={handleReset}>Restablecer</button>
        </form>
    );
}

export default LoginForm;