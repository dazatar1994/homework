#!/usr/bin/env 
const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv; 
const readline = require('node:readline').createInterface({
	input: process.stdin,
	output: process.stdout,
  });

const fileName = argv._[0];
const randomNumber = Math.floor(Math.random() * 2) + 1;
let headortail;

readline.question(`Угадай орел или решка(1 = орел, 2 = решка) `, req => {
	if(req > 2) headortail = 'Упала ребром';
	else if(req == randomNumber) headortail = 'Угадал';
	else headortail = 'Проиграл';

	const writeString = fs.createWriteStream(`plays/${fileName}.txt`);
	writeString.write(headortail, "utf-8");
	writeString.end();
	readline.close();
});

