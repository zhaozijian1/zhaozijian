import axios from 'axios'
export function getHome() {
    const url = 'https://easy-mock.com/mock/5a30e33994aa434154e6a4f5/example_1513151716346_1513153337628/smok'
    const data = Object.assign({}, {
    })
    return axios.get(url,).then((res) => {
     return Promise.resolve(res.data)
    })
  }