import axios from 'axios'

axios.defaults.baseURL = `${BASE_URL}`

export const request = (requestObject = {}) => {
    requestObject.headers = {
        'x-hasura-admin-secret': `${X_HASURA_ADMIN_SECRET}`,
        ...requestObject.headers
    }

    return axios(requestObject).then(
        response => Promise.resolve(response),
        error => {
            return Promise.reject(error.response.data)
        }
    )
}
