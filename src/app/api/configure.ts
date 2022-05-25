import { AxiosRequestConfig } from 'axios';

class Configure {
  public static hasura: AxiosRequestConfig = {
    method: 'post',
    url: '',
    headers: {
      'Content-Type': 'application/json',
      'x-hasura-admin-secret': '',
    },
    data: '',
  };
}
export { Configure };
