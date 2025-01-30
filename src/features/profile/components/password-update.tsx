import { PasswordField } from "@/components/password-field";
import { Button } from "@/components/ui/button";
import IUserRegisterData from "../../../types/User";
import { useEffect, useState } from "react";
import UserService from "@/service/UserService";

export function PasswordUpdate() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [userData, setUserData] = useState<IUserRegisterData | null>(null);

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user_id) {
        try {
          const response = await UserService.get(user_id);

          setUserData(response.data);
        } catch (error: any) {
        } finally {
        }
      } else {
      }
    };

    fetchUserData();
  }, [user_id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newPassword);
    console.log(confirmPassword);

    if (newPassword !== confirmPassword) {
      console.log("La nueva contraseña y la confirmación no coinciden.");
      //return;
    } else {
      if (user_id && userData) {
        try {
          userData.password = newPassword;
          userData.confPassword = confirmPassword;
          await UserService.updatePassword(user_id, userData);

          console.log("La contraseña ha sido actualizada con éxito.");
        } catch (error) {
          console.log("Error al actualizar la contraseña:", error);
        }

        // Llama al servicio para actualizar la contraseña

        console.log("La condicion se cumple y se salta el try");
      } else {
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
