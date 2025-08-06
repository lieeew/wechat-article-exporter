import axios from 'axios'

// 区分开发和生产环境
const DEV_BASE_URL = "http://localhost:8101";
// 创建 Axios 实例
const myAxios = axios.create({
    baseURL: DEV_BASE_URL,
    timeout: 10000,
    withCredentials: true,
});

export default myAxios
