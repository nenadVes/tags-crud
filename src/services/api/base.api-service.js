import Axios from 'axios'
import { API } from '@/config'

export default class BaseApiService {
  get (endpoint) {
    return this.sendRequest({ endpoint, method: 'GET' })
  }

  post (endpoint, data) {
    return this.sendRequest({ endpoint, method: 'POST', data })
  }

  put (endpoint, data) {
    return this.sendRequest({ endpoint, method: 'PUT', data })
  }

  delete (endpoint) {
    return this.sendRequest({ endpoint, method: 'DELETE' })
  }

  sendRequest ({ endpoint, method, data }) {
    return Axios({
      url: `${API.BASE_URL}${endpoint}?api_token=${API.TOKEN}`,
      method,
      data,
      headers: { 'Content-Type': 'application/json' },
      options: { crossDomain: true }
    }).then(response => response.data.data)
  }
}
