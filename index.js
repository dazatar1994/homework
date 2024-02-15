#!/usr/bin/env 
const clear = require('clear')
const chalk = require('chalk')
const figlet = require('figlet')
const my_f = require('./my_functions')
const os = require('os')
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv; 

clear()

console.log(
  chalk.yellow.bold(
    figlet.textSync(`HELLO_${os.userInfo().username}!`, {
      horizontalLayout: 'full'
    })
  )
)

	my_f.get_w(argv._[0])


