import { Label } from "@radix-ui/react-label";
import UserService from "@/service/UserService";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function DeleteAccount() {
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (user_id) {
        // Llama al servicio para eliminar la cuenta
        await UserService.remove(user_id); // Asegúrate de tener esta función en tu servicio
        setMessage("Tu cuenta ha sido eliminada con éxito.");
        console.log("Tu cuenta ha sido eliminada con éxito.");
        // Opcional: puedes redirigir al usuario o limpiar el localStorage si es necesario
        localStorage.removeItem("user_id");
        window.location.href = "/"; // Redirigir a una página específica si lo deseas
      } else {
        setMessage("No se encontró el ID de usuario.");
        console.log("No se encontró el ID de usuario.");
      }
    } catch (error) {
      setMessage(
        "Hubo un error al eliminar tu cuenta. Por favor, inténtalo de nuevo."
      );
      console.log(
        "Hubo un error al eliminar tu cuenta. Por favor, inténtalo de nuevo."
      );
      console.error("Error al eliminar la cuenta:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg space-y-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-start">
          <Label
            htmlFor="deleteAccount"
            className="text-base font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            ¿Deseas eliminar tu cuenta?
          </Label>
        </div>
        <div className="flex justify-start mb-4">
          <p className="text-sm text-muted-foreground text-slate-500 dark:text-slate-400">
            Esta acción no puede revertirse. Por favor asegurate primero.
          </p>
        </div>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <div className="flex justify-end items-left">
              <Button className="bg-blue-600" type="button">
                Eliminar cuenta
              </Button>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>Confirmar eliminación</AlertDialogTitle>
            <AlertDialogDescription>
              ¿Estás seguro que deseas eliminar tu cuenta? Esta acción no se
              puede deshacer.
            </AlertDialogDescription>
            <div className="flex justify-end space-x-2">
              <AlertDialogCancel asChild>
                <Button variant="secondary">Cancelar</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button type="button" onClick={handleSubmit}>
                  Eliminar
                </Button>
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </form>
    </div>
  );
}
