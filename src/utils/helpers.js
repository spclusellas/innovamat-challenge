export const arrayGroupBy = function (array, key) {
	return array.reduce((rv, x) => {
		;(rv[x[key]] = rv[x[key]] || []).push(x)
		return rv
	}, {})
}
