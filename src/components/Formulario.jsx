import { useState } from "react";

const Formulario = ({ setAtento }) => {
  const [formu, setFormu] = useState({
    nombre: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  });

  const validarFormu = (e) => {
    e.preventDefault();
    const { nombre, email, password, ConfirmPassword } = formu;
    const validarInputs = !nombre | !email | !password | !ConfirmPassword;
    const validarPassword = password !== ConfirmPassword;

    validarInputs
      ? setAtento({
          error: true,
          msg: "Completa los campos requeridos!",
          color: "danger",
        })
      : setAtento({
          error: false,
          msg: "Cuenta creada exitosamente",
          color: "success",
        });

    if (validarPassword) {
      setAtento({
        error: false,
        msg: "Las contraseña no coinciden",
        color: "danger",
      });
      return;
    }

    setFormu({
      nombre: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    });
  };

  setTimeout(() =>{
    setAtento({
        error:false,
        msg:'',
        color: ''
    })
    
 },10000)

  const cambioDeEstado = (e) => {
    setFormu({ ...formu, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="formu" onSubmit={validarFormu}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            placeholder="Name"
            onChange={cambioDeEstado}
            value={formu.nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            onChange={cambioDeEstado}
            value={formu.email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={cambioDeEstado}
            value={formu.password}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="ConfirmPassword"
            placeholder="Confirm your password"
            onChange={cambioDeEstado}
            value={formu.ConfirmPassword}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
