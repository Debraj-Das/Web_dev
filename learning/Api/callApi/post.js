import axios from 'axios'

const post = async (joke) => {
	const res = await axios.post(`http://localhost:3000/jokes`, joke, {
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return res.data;
}

let data = {
	text : 'world is not beautiful or ugly',
	type : 'Puns'
}
const resdata = await post(data);

console.log(resdata)
