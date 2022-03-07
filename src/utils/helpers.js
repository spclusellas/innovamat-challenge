export const arrayGroupBy = function (array, key) {
	const res = array.reduce((rv, x) => {
		;(rv[x[key.toLowerCase()]] = rv[x[key.toLowerCase()]] || []).push(x)
		return rv
	}, {})

	return res
}
