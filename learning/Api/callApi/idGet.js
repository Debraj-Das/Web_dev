import axios from 'axios'

const idGet = async (ID) => {
	const res = await axios.get(`http://localhost:3000/jokes/${ID}`);
	return res.data;
}

const data = await idGet(10);
console.log(data)
