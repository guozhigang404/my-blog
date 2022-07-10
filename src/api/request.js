import axios from 'axios';

const ins = axios.create();

ins.interceptors.response.use((resp) => {
    if (resp.data.code !== 0) {
        console.log("api error");
        return null;
    }
    return resp.data.data;
})

export default ins;