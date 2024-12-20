import axiosClient from './axiosClient';

const UserAPI = {
  getAllData: () => {
    const url = 'api/auth/users';
    return axiosClient.get(url);
  },

  getDetailData: id => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: query => {
    const url = `/users/signup/${query}`;
    return axiosClient.post(url);
  },

  postLogin: query => {
    const url = `/api/auth/admin/login`;
    return axiosClient.post(url, query);
  },

  logout: () => {
    const url = `/api/auth/logout`;
    return axiosClient.post(url);
  },
};

export default UserAPI;
