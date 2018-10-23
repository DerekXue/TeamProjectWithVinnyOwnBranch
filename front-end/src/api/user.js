import api from './init'

let handleErrors;
export function init(handleError) {
  handleErrors = handleErrors
}

export function getUserDetails() {
  return api.get(`/personal`)
    .then(res => {
      if (res) {
        console.log("res", res)
        return res.data
      }
    })
  // .catch(error => {
  // console.log("res",error)
  // throw Error(error)})
}