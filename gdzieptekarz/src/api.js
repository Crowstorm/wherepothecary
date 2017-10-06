import axios from 'axios'

export default {
    user: {
        login: (credentials) => axios.post('/api/eauth', {credentials}).then(res => res.user.data)
    }
}