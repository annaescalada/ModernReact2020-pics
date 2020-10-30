import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c4lQtvretIg31VGo-z-spjdD8on8y5yNl189nIF9dqM'
    }
})

