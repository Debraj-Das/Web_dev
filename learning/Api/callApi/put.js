import axios from 'axios'

const data = {
	text : 'all is well, all is well',
	type : 'Science'
};

const put = async (id, joke) => {
	const res = await axios.put(`http://localhost:3000/jokes/${id}`,joke);
	return res.data;
}

const resdata = await put(10, data);

console.log(resdata)
