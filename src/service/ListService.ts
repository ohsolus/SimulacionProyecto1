import http from "../http-common.ts";
import IListData from "../types/List.ts";

const getAll = () => {
  return http.get<Array<IListData>>("/list");
};

/*
const get = (id: any) => {
  return http.get<IUserRegisterData>(`/user/${id}`);
};
*/

const create = (data: IListData) => {
  return http.post<IListData>("/create/list", data);
};

const get = (id: string) => {
  return http.get<IListData>(`/list/${id}`);
};

/*
const update = (id: string, data: Partial<IUserRegisterData>) => {
  return http.patch<IUserRegisterData>(`/user/${id}`, data);
};
*/

const remove = (id: any) => {
  return http.delete<any>(`/delete/list/${id}`);
};

/*
const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
};
*/

const ListService = {
  getAll,
  get,
  create,
  remove,
  /*
  removeAll,
  findByTitle,
  */
};

export default ListService;
