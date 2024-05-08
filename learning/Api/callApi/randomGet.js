import axios from 'axios';

const randomGet = async () => {
	const res = await axios.get("http://localhost:3000/random/",);
	return res.data;
}

for (let i = 0 ; i < 10 ; i++)
{
	const data = await randomGet();
	console.log(data);
}
