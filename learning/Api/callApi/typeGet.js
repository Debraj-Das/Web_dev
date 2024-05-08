import axios from 'axios'

const typeGet = async (jokeType) => {
	const res = await axios.get(`http://localhost:3000/filter`, {
		params: {
			type: jokeType 
		}
	});
	return res.data;
}

const data = await typeGet('Science');
console.log(data)
