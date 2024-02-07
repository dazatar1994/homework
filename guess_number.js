const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  };
const random_num = generateRandomNumber(1, 100);
let first_launch = true
const readline = require('node:readline').createInterface({
	input: process.stdin,
	output: process.stdout,
  });
function play(){
	if(first_launch){
		first_launch = false
		readline.question(`Загадано число в диапазоне от 0 до 100	`, req => {
			if( random_num > req){
				console.log('Больше')
				play()
			}
			if( random_num < req){
				console.log('Меньше')
				play()
			}
			if( random_num == req){
				console.log(`Отгадано число ${req}`)
				readline.close()
			}
	})}
	else{
		readline.question(``, req => {
			if( random_num > req){
				console.log('Больше')
				play()
			}
			if( random_num < req){
				console.log('Меньше')
				play()
			}
			if( random_num == req){
				console.log(`Отгадано число ${req}`)
				readline.close()
			}
	})}
}

	
play();
	