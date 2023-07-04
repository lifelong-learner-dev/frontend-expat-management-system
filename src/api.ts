import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios"
import Cookies from "js-cookie";
import { formatDate } from "./lib/utils";

const instance = axios.create({
    baseURL:"http://127.0.0.1:8000/api/v1",
    withCredentials: true,
})

const BASE_URL = "http://127.0.0.1:8000/api/v1"

export const getWorkpermits = () =>
  instance.get("work_permits/").then((response) => response.data);

export const getWorkpermitsRequests = () =>
  instance.get("work_permits_requests/").then((response) => response.data);

export const getWorkpermitsProcesses = () =>
  instance.get("work_permits_processes/").then((response) => response.data);

export const getAnnouncements = () =>
  instance.get("announcements/").then((response) => response.data);

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: {
        "X-CSRFToken": Cookies.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IUsernameLoginVariables {
  username: string;
  password: string;
}

export interface IUsernameLoginSuccess {
  ok: string;
}

export interface IUsernameLoginError {
  error: string;
}

export const usernameLogIn = ({
  username,
  password,
}: IUsernameLoginVariables) => instance.post(
  `users/log-in`,
  { username, password },
  {
    headers: {
      "X-CSRFToken": Cookies.get("csrftoken") || "",
    },
  }
);