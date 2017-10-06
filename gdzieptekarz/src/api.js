import axios from 'axios'

export default {
    user: {
        login: (credentials) => axios.post('/api/eafuth', {credentials}).then(res => res.user.data)
    }
}