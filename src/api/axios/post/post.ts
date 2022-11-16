// 게시글 관련 통신
import { axiosInstance } from './../instance';

export const getPosts = () => axiosInstance.get('').then(res => res.data);
