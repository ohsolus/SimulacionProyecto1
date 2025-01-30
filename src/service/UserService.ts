import http from "../http-common.ts";
import IUserRegisterData from "../types/User.ts";

/*
const getAll = () => {
  return http.get<Array<ITutorialData>>("/tutorials");
};
*/
/*
const get = (id: any) => {
  return http.get<IUserRegisterData>(`/user/${id}`);
};
*/

const create = (data: IUserRegisterData) => {
  return http.post<IUserRegisterData>("/register", data);
};

const get = (id: string) => {
  return http.get<IUserRegisterData>(`/user/${id}`);
};

/*
const update = (id: string, data: Partial<IUserRegisterData>) => {
  return http.patch<IUserRegisterData>(`/user/${id}`, data);
};
*/

const updateGeneralForm = (id: any, data: IUserRegisterData) => {
  return http.patch<any>(`/user/${id}`, data);
};

const updatePassword = (id: any, data: IUserRegisterData) => {
  return http.patch<any>(`/user/password/${id}`, data);
};

const remove = (id: any) => {
  return http.delete<any>(`/user/${id}`);
};

/*
const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
};
*/

const UserService = {
  /*
  getAll,
    */
  get,
  create,
  updateGeneralForm,
  updatePassword,
  remove,
  /*
  removeAll,
  findByTitle,
  */
};

export default UserService;
