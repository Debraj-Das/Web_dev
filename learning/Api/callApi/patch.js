import axios from 'axios'

const patch = async (id, joke) => {
	const res = await axios.patch(`http://localhost:3000/jokes/${id}`,joke);
	return res.data;
}

const data = {
	text : 'world is not beautiful or ugly',
}

const resdata = await patch(10, data);

console.log(resdata)
