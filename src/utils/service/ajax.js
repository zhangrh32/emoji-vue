import service from './http-service'
import store from '../../store'
const token = store.state.token
var ajax = {
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      let data = {
        token: token,
        ...params
      }
      service.post(url, data).then(response => {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    });
  },
  get: function (url, params) {
    return new Promise((resolve, reject) => {
      let data = {
        token: token,
        ...params
      }
      service.get(url, data).then(response => {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    });
  }
}
export default ajax