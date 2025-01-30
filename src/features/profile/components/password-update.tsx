/** */
//import { Label } from "@radix-ui/react-label";

import { PasswordField } from "@/components/password-field";
import { Button } from "@/components/ui/button";

//import AddItem from "./add-item";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import IUserRegisterData from "../../../types/User";
import { useEffect, useState } from "react";
import UserService from "@/service/UserService";
import { TextField } from "@/components/text-field";

export function PasswordUpdate() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState<IUserRegisterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user_id) {
        try {
          const response = await UserService.get(user_id);

          setUserData(response.data);
        } catch (error: any) {
          setError("Error al cargar los datos del usuario.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("No se encontró el ID de usuario en el localStorage.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user_id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newPassword);
    console.log(confirmPassword);

    if (newPassword !== confirmPassword) {
      setMessage("La nueva contraseña y la confirmación no coinciden.");
      console.log("La nueva contraseña y la confirmación no coinciden.");
      //return;
    } else {
      if (user_id && userData) {
        try {
          userData.password = newPassword;
          userData.confPassword = confirmPassword;
          await UserService.updatePassword(user_id, userData);
          setMessage("La contraseña ha sido actualizada con éxito.");
          console.log("La contraseña ha sido actualizada con éxito.");
        } catch (error) {
          setMessage(
            "Hubo un error al actualizar la contraseña. Por favor, inténtalo de nuevo."
          );
          console.log("Error al actualizar la contraseña:", error);
        }

        // Llama al servicio para actualizar la contraseña

        setMessage("La condicion se cumple y se salta el try");
        console.log("La condicion se cumple y se salta el try");
      } else {
        setMessage("No se encontró el ID de usuario.");
        console.log("No se encontró el ID de usuario.");
      }
    }
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) =>
      prevData ? { ...prevData, [name]: value } : null
    );
  };

  return (
    <>
      {userData ? (
        <form
          method="patch"
          className="w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground flex justify-start text-slate-500 dark:text-slate-400">
              (*) Debe contener al menos 15 carácteres u 8 incluidos números y
              minúsculas.
            </p>
            <div className="form-group" onChange={handleChange}>
              <PasswordField
                id="password"
                value={userData.password}
                labelProps={{
                  children: "Contraseña",
                }}
                inputProps={{
                  value: confirmPassword,
                  onChange: (e) => setConfirmPassword(e.target.value),
                  autoComplete: "new-password",
                }}
              />
            </div>

            <div className="form-group" onChange={handleChange}>
              <PasswordField
                id="confirmPassword"
                value={userData.confPassword}
                labelProps={{
                  children: "Confirmar Contraseña",
                }}
                inputProps={{
                  value: newPassword,
                  onChange: (e) => setNewPassword(e.target.value),
                  autoComplete: "password",
                }}
              />
            </div>
          </div>
          <br></br>
          <div className="flex justify-end h-6 w-6 w-full items-left">
            <Button>
              <span>Guardar cambios</span>
            </Button>
          </div>
        </form>
      ) : (
        <p>Esto no debe pasar</p>
      )}
    </>
  );
}

{
  /*
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import UserService from "@/service/UserService";

export function UpdatePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const user_id = localStorage.getItem("user_id");

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("La nueva contraseña y la confirmación no coinciden.");
      return;
    }

    try {
      if (user_id) {
        // Llama al servicio para actualizar la contraseña
        await UserService.updatePassword(user_id, {
          password, // Asegúrate de que tu backend acepte y maneje estos campos
          confPassword,
        });
        setMessage("La contraseña ha sido actualizada con éxito.");
      } else {
        setMessage("No se encontró el ID de usuario.");
      }
    } catch (error) {
      setMessage("Hubo un error al actualizar la contraseña. Por favor, inténtalo de nuevo.");
      console.error("Error al actualizar la contraseña:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <h2 className="text-2xl font-semibold">Cambiar Contraseña</h2>
      {message && <p className="text-red-500">{message}</p>}

      <div className="form-group">
        <PasswordField
          id="currentPassword"
          labelProps={{ children: "Contraseña Actual" }}
          inputProps={{
            value: currentPassword,
            onChange: (e) => setCurrentPassword(e.target.value),
            placeholder: "Introduce tu contraseña actual",
            required: true,
          }} value={""}        />
      </div>

      <div className="form-group">
        <PasswordField
          id="newPassword"
          labelProps={{ children: "Nueva Contraseña" }}
          inputProps={{
            value: newPassword,
            onChange: (e) => setNewPassword(e.target.value),
            placeholder: "Introduce la nueva contraseña",
            required: true,
          }} value={userDat}        />
      </div>

      <div className="form-group">
        <TextField
          id="confirmPassword"
          labelProps={{ children: "Confirmar Nueva Contraseña" }}
          inputProps={{
            type: "password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            placeholder: "Confirma la nueva contraseña",
            required: true,
          }}
        />
      </div>

      <Button type="submit">Actualizar Contraseña</Button>
    </form>
  );
}

*/
}

////////////////////////////////////////////////////////////
// Password update without method
{
  /*
import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import IUserRegisterData from "@/types/User";
import { ChangeEvent, useState } from "react";

export function PasswordUpdate() {
  const { toast } = useToast();
  const [profile, setProfile] = useState<IUserRegisterData | null>(null);

  const onSubmit = () => {
    return toast({
      title: "Aviso",
      description: "Has cambiado tu contraseña con éxito",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevData) =>
      prevData ? { ...prevData, [name]: value } : null
    );
  };

  return (
    <form method="post" className="w-full space-y-6" onSubmit={onSubmit}>
      <div className="space-y-4">
        <PasswordField
          id="password"
          labelProps={{
            children: "Actual Contraseña",
          }}
          inputProps={{
            placeholder: "",
            autoComplete: "password",
          }}
          value={""}
        />
        <PasswordField
          id="newPassword"
          labelProps={{
            children: "Nueva Contraseña",
          }}
          inputProps={{
            autoComplete: "password",
          }}
          value={""}
        />
        <PasswordField
          id="confirmPassword"
          labelProps={{
            children: "Confirmar Contraseña",
          }}
          inputProps={{
            autoComplete: "password",
          }}
          value={""}
        />
        <br />
        <TextField
          id="confirmPassword"
          value={""}
          labelProps={{ children: "Confirmar Contraseña" }}
          inputProps={{
            autoComplete: "password",
          }}
        />
        <TextField
          id="name"
          className="mr-2 w-full"
          labelProps={{
            children: "Nombre",
          }}
          inputProps={{
            placeholder: "ej: John",
            autoComplete: "given-name",
            type: "text",
          }}
          value={""}
        />
        <div className="form-group" onChange={handleInputChange}>
          <TextField
            id="name"
            className="mr-2 w-full"
            labelProps={{
              children: "Nombre",
            }}
            inputProps={{
              placeholder: "ej: John",
              autoComplete: "given-name",
              type: "text",
            }}
            value={""}
          />
        </div>
        <div className="form-group" onChange={handleInputChange}>
          <PasswordField
            id="password"
            value={""}
            labelProps={{ children: "Contraseña (Opcional)" }}
            inputProps={{ autoComplete: "new-password" }}
          />
        </div>

        <p className="text-sm text-muted-foreground flex justify-start text-slate-500 dark:text-slate-400">
          (*) Debe contener al menos 15 carácteres u 8 incluidos números y
          minúsculas.
        </p>
      </div>
      <div className="mb-4 h-6 w-6 w-full flex justify-end items-left">
        <Button>
          <span>Actualizar</span>
        </Button>
        <Button className="ml-2 mr-2 " variant="outline">
          <span>Olvidé mi contraseña</span>
        </Button>
      </div>
    </form>
  );
}*/
}
