const {networkInterfaces} = require('os')
const nets = networkInterfaces();
require('dotenv').config();

module.exports = {
	get_my_ip: function () {
		const results = Object.create(null); 
		for (const name of Object.keys(nets)) {
			for (const net of nets[name]) {
				const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
				if (net.family === familyV4Value && !net.internal) {
					if (!results[name]) {
						results[name] = [];
					}
					results[name].push(net.address);
				}
			}
		}
		return results['Ethernet 3'][0]
	},
	get_w: function (city = 'x') {
		
		var promise = new Promise(async (resolve, reject) => {			
			let ipresponse = await fetch('http://ipwho.is');
			if(ipresponse.status == 200){
				let json = await ipresponse.json()
				resolve(json.city)
			}
			
		  })
		
		
		

		
		promise.then(async result => {
			if (city != 'x') result = city;
			let api_key = process.env.api_key;
			let url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${result}`;
			let response = await fetch(url);
			if(response.ok){
				let json = await response.json()
				let city = json.location.name
				let temp = json.current.temp_c
				let wind = json.current.wind_kph
				let wind_d = json.current.wind_dir
			
				wind_directions = {'W': 'западный', 'S': 'южный', 'E': 'восточный', 'N': 'северный',
									'NE': 'северо-восточный', 'NW': 'северо-западный', 
									'SE': 'юго-восточный', 'SW': 'юго-западный'}
			
				console.log(json)
				console.log(`В городе ${city} сейчас ${temp} градусов по цельсию, ветер ${wind_directions[wind_d]}, а его скорость ${wind} километров в час`)
			}

			
		}, error =>{console.log('err')})	}
  };




