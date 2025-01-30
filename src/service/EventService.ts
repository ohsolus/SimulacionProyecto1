import http from "../http-common.ts";
import IEventData from "../types/Event.ts";

const getAll = () => {
  return http.get<Array<IEventData>>("/events");
};

/*
const get = (id: any) => {
  return http.get<IUserRegisterData>(`/user/${id}`);
};
*/

const create = (data: IEventData) => {
  return http.post<IEventData>("/create/event", data);
};

const get = (id: string) => {
  return http.get<IEventData>(`/event/${id}`);
};

/*
const update = (id: string, data: Partial<IUserRegisterData>) => {
  return http.patch<IUserRegisterData>(`/user/${id}`, data);
};
*/

const remove = (id: any) => {
  return http.delete<any>(`/delete/event/${id}`);
};

/*
const removeAll = () => {
  return http.delete<any>(`/tutorials`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
};
*/

const EventService = {
  getAll,
  get,
  create,
  remove,
  /*
  removeAll,
  findByTitle,
  */
};

export default EventService;
