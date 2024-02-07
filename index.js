#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv; 

let days = {1:'Понедельник',2:'Вторник',3:'Среда',4:'Четверг',5:'Пятница',6:'Суббота',7:'Воскресенье'}
let months = {1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь'}

function sub_or_add(){
	if(argv._[0] == 'sub') return true
	if(argv._[0] == 'add') return false
}

if(argv.y || argv.year){
	let addsub = argv.y || argv.year
	if(argv.y === true || argv.year === true) addsub = 0;
	if(sub_or_add()) addsub = -addsub
	console.log(new Date().getFullYear() + addsub + ' год' || new Date().getFullYear() + addsub + ' год')

}
if(argv.m || argv.month){
	let addsub = argv.m || argv.month
	if(argv.m === true || argv.month === true) addsub = 0;
	if(sub_or_add()) addsub = -addsub
	if(new Date().getMonth() + addsub > 12 || new Date().getMonth() + addsub < 1) console.log('Ты прибавил или убавил слишком много')
	else console.log(months[new Date().getMonth() + addsub] || months[new Date().getMonth() + addsub])

}

if(argv.d || argv.date){
	let addsub = argv.d || argv.date
	if(argv.d === true || argv.date === true) addsub = 0;
	if(sub_or_add()) addsub = -addsub
	if(new Date().getDay() + addsub > 7 || new Date().getDay() + addsub < 1) console.log('Ты прибавил или убавил слишком много дней')
	else console.log(days[new Date().getDay() + addsub] || days[new Date().getDay() + addsub])

}
