import axios from "axios";
import SuperTokens from 'supertokens-react-native';

let axiosInstance = axios.create({ baseURL: 'http://localhost:3001' });
SuperTokens.addAxiosInterceptors(axiosInstance);

// async function callAPI() {
//     // use axios as you normally do
//     let response = await axiosInstance.get("https://yourapi.com");
// }