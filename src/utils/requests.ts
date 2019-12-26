// Request({
//     url: getUrl('/todos', params, 'GET'),

//     method: 'get',
//   });
import axios from 'axios';

interface IRequests {
    url: string,
    bodyParams?: any,
    method: string,
}
export default (o: IRequests) => {
    return axios(o.url).then(res => {
        return res.data
    })
}
