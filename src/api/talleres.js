import { v4 as uuidv4 } from 'uuid'

const apiUrl = `https://api.mocklets.com/mock68016`

export const getTalleres = async () => {
	try {
		const res = await fetch(`${apiUrl}/talleres`)
		const response = await res.json()
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

		return data
	} catch (error) {
		console.error(error)
	}
}

export const getTallerDetail = async tallerId => {
	try {
		const res = await fetch(`${apiUrl}/resource/${tallerId}`)
		const response = await res.json()
		return response
	} catch (error) {
		console.error(error)
	}
}
