const fs = require('fs');
const path = require('path');

const folderName = './plays';

fs.readdir(folderName, (err, files) => {
  if (err) {
    console.error(`${err}`);
    return;
  }

  let wins = 0;
  let loses = 0;
  let totalGames = 0;

  files.forEach(file => {
    const filePath = path.join(folderName, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
	if(fileContent == 'Угадал') wins ++;
	if(fileContent == 'Проиграл') loses ++;
	totalGames++;
  });

  console.log(`Побед: ${wins}, Проигрышей: ${loses}, Всего игр: ${totalGames}`);
});
