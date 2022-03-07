import { v4 as uuidv4 } from 'uuid'

const apiUrl = `https://api.mocklets.com/mock68016/talleres`

export const getTalleres = async () => {
	try {
		const res = await fetch(apiUrl)
		const response = await res.json()
		console.log(response)
		const data = response.map(s => {
			return {
				...s,
				resources: s.resources.map((r, i) => ({
					...r,
					idf: `${r.id}-${r.tag.toLowerCase()}-${i}`,
					uuid: uuidv4(),
				})),
			}
		})

		console.log(data)
		return data
	} catch (error) {
		console.error(error)
	}
}

export const getTallerDetail = async tallerId => {
	try {
		const res = await fetch(`${process.env.REACT_APP_API_URL}/resource/${tallerId}`)
		const response = await res.json()
		return response
	} catch (error) {
		console.error(error)
	}
}
