import http from "../http-common.ts";
import IReminderData from "../types/Reminder.ts";

const getAll = () => {
  return http.get<Array<IReminderData>>("/reminders");
};

/*
const get = (id: any) => {
  return http.get<IUserRegisterData>(`/user/${id}`);
};
*/

const create = (data: IReminderData) => {
  return http.post<IReminderData>("/create/reminder", data);
};

const get = (id: string) => {
  return http.get<IReminderData>(`/reminder/${id}`);
};

/*
const update = (id: string, data: Partial<IUserRegisterData>) => {
  return http.patch<IUserRegisterData>(`/user/${id}`, data);
};
*/

const remove = (id: any) => {
  return http.delete<any>(`/delete/reminder/${id}`);
};

/*
const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
};
*/

const ReminderService = {
  getAll,
  get,
  create,
  remove,
  /*
  removeAll,
  findByTitle,
  */
};

export default ReminderService;
