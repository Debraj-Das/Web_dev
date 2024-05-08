import axios from 'axios'

const del = async (id) => {
	const res = await axios.delete(`http://localhost:3000/jokes/${id}`);
	return res.data;
}

const resdata = await del(10);

console.log(resdata)
