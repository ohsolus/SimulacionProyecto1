import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import IUserLoginData from "../../../types/Login";
import { ChangeEvent, useState } from "react";
import LoginService from "@/service/LoginService";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const initialLoginState = {
    user_id: "",
    name: "",
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [login, setLogin] = useState<IUserLoginData>(initialLoginState);

  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
    console.log(login);
  };

  const loginUser = async () => {
    const data = {
      user_id: login.user_id,
      name: login.name,
      email: login.email,
      password: login.password,
    };

    try {
      const response = await LoginService.create(data);

      // Guardar el userId en localStorage
      // const user_id = response.data.userId; // Asegúrate de que el backend envíe el userId en response.data

      const user_id = response.data.user_id;
      console.log("User ID:", user_id);
      localStorage.setItem("user_id", user_id);

      //almacena el email para utilizarlos como avatar y como username
      const initials = `${response.data.name.charAt(0)}`.toUpperCase();
      localStorage.setItem("user_name", initials);
      // Guarda el ID en localStorage
      //console.log(response.data.userId);
      //como guardar un usuario en el usuario
      //console.log("dios llego aqui?");

      navigate("/home");
      console.log("Login successful", response.data); // Aquí puedes manejar la respuesta del login
      setSubmitted(true);
    } catch (error: any) {}

    /*    LoginService.create(data) // Cambiar a método de login
      .then((response: any) => {
        //const response = await create(loginData);
        console.log("Login successful", response.data);
        // Asume que el token JWT está en la respuesta

        // Guarda el token en localStorage
        setSubmitted(true);
        console.log(response.x);
        setError(null); // Si el login es exitoso, limpiar el error
        navigate("/home");
      })
      .catch((e: Error) => {
        setError("Login fallido. Verifica tus credenciales."); // Mostrar un mensaje de error
        console.log(e);
      });
      */
  };

  const newLogin = () => {
    setLogin(initialLoginState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form w-full space-y-6">
      {submitted ? (
        <div>
          <h4>¡Login exitoso!</h4>
          <button className="btn btn-success" onClick={newLogin}>
            Volver a intentar
          </button>
        </div>
      ) : (
        <div className="space-y-4 ">
          <div className="form-group" onChange={handleInputChange}>
            <TextField
              id="email"
              value={login.email}
              labelProps={{
                children: "Email",
              }}
              inputProps={{
                placeholder: "ej: johndoe@gmail.com",
                autoComplete: "email",
                type: "email",
              }}
            />
          </div>

          <div className="form-group" onChange={handleInputChange}>
            <PasswordField
              id="password"
              value={login.password}
              labelProps={{
                children: "Contraseña",
              }}
              inputProps={{
                autoComplete: "new-password",
              }}
            />
          </div>

          <Link to="/" className="text-foreground underline">
            ¿Has olvidado tu contraseña?
          </Link>

          <Button onClick={loginUser} className="w-full">
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}
