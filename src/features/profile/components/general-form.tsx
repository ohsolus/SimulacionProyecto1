import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import IUserRegisterData from "../../../types/User";
import { useEffect, useState } from "react";
import UserService from "@/service/UserService";
export function GeneralForm() {
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

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData && user_id) {
      try {
        await UserService.updateGeneralForm(user_id, userData);
        alert("Datos actualizados con éxito");
      } catch (error: any) {
        setError("Error al actualizar los datos del usuario.");
        console.log(error);
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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  //In case of avatar was not an image, then could be initials of the name
  const user_name = localStorage.getItem("user_name");

  return (
    <>
      {userData ? (
        <form
          method="post"
          className="w-full space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              <Avatar className=" h-20 w-20 rounded-full object-cover shadow-md">
                <AvatarFallback className="text-gray text-3xl font-semibold ">
                  {user_name}
                </AvatarFallback>
              </Avatar>
            </div>

            <div>
              <h1 className="ml-3 mt-5 text-2xl font-semibold">
                {userData.name}
              </h1>
            </div>

            <br />

            <div className="form-group" onChange={handleChange}>
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
                value={userData.name}
              />
            </div>

            <div className="form-group" onChange={handleChange}>
              <TextField
                id="email"
                labelProps={{
                  children: "Email",
                }}
                inputProps={{
                  placeholder: "ej: johndoe@gmail.com",
                  autoComplete: "email",
                  type: "email",
                }}
                value={userData.email}
              />
            </div>
            <div className="form-group">
              <TextField
                id="role"
                value={userData.role || ""}
                labelProps={{ children: "Rol" }}
                inputProps={{ readOnly: true }}
              />
              <div className="mb-4 flex justify-start">
                <p
                  className="text-sm text-muted-foreground text-slate-500 dark:text-slate-400"
                  speechify-initial-font-size-modified="true"
                >
                  (*) Por seguridad, este campo no se puede modificar
                </p>
              </div>
            </div>
          </div>
          <br></br>
          {/*
          <Label
            htmlFor="tag"
            className="flex items-left justify-left peer-disabled:opacity-70px] text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
          >
            Etiquetas
          </Label>
          <AddItem />
*/}
          <div className="flex justify-end h-6 w-6 w-full items-left">
            <Button>
              <span>Guardar cambios</span>
            </Button>
          </div>
        </form>
      ) : (
        <p>No hay datos para mostrar.</p>
      )}
    </>
  );
}
