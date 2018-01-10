import axios from 'axios'
export function getseller(seller) {
	const url = 'https://easy-mock.com/mock/5a30e33994aa434154e6a4f5/example_1513151716346_1513153337628/smok'
	const data = Object.assign({}, {
		sellerone: seller 
	})
	return axios.get(url, {
		sellers: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
export function getgoods(goods) {
	const url = 'https://easy-mock.com/mock/5a30e33994aa434154e6a4f5/example_1513151716346_1513153337628/smok'
	const data = Object.assign({}, {
		sellerone: goods 
	})
	return axios.get(url, {
		sellers: goods
	}).then((res) => {
		return Promise.resolve(res.goods)
	})
}
