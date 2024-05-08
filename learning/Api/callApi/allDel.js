import axios from 'axios'
import qs from 'qs'

let data = qs.stringify({
  'key': '4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT' 
});

let config = {
  method: 'delete',
  url: 'http://localhost:3000/all',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

const res = await axios.request(config)
console.log(res.data);
