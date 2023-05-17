import React, { useState } from "react";
import "./loginFormStile/LoginForm.css";

function LoginForm() {
  // crea el estado utilizando useState para mantener un seguimiento de los valores ingresados en los campos de inicio de sesión.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    //para actualizar el estado cuando los campos cambien.
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    //es para manejar el evento de envío del formulario
    event.preventDefault();
    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <p className="emailStile">Correo electrónico:</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          className="inputEmail"
        />
      </label>
      <br />
      <label>
        <p className="passwordStile">Contraseña:</p>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          className="inputPassword"
        />
      </label>
      <br />
      <button type="submit" className="startButton">
        Iniciar sesión
      </button>
      <button type="reset" className="restartButton" onSubmit={handleReset}>
        Restablecer
      </button>
    </form>
  );
}

export default LoginForm;
