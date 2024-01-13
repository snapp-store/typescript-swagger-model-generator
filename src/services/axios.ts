import { Api } from "@/models/club";
import { AxiosError } from "axios";

// Axios Instance Generate By Tools
const clubApi = new Api({
  baseURL: "http://192.168.0.0/api",
});

clubApi.instance.interceptors.request.use(
  async (config) => {
    // Handle SendRequest
    return config;
  },
  (error: unknown) => {
    Promise.reject(error);
  }
);

clubApi.instance.interceptors.response.use(
  (response) => {
    return response; // Handle Success Request;
  },
  async function (error: AxiosError) {
    if ((error?.response?.data as { Message: string }).Message)
      if (error?.response?.status === 401) {
        // Handle Error
        window.location.href = "/auth";
      }
    return Promise.reject(error);
  }
);

const clubRequest = clubApi.gateway;
// ****************************************************************************/
// If there is multi prefix exist in multi definition, you can use this approach
// export const ropoloRequest = {
//     ...ropoloApi.api,
//     ...ropoloApi.apiCatalog,
//     ...ropoloApi.apiIdentity,
//   };
// ****************************************************************************/

export default clubRequest;
