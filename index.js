const { exec } = require('child_process');

// Замените 'username/reponame' на имя пользователя и имя репозитория на Github
const githubRepo = 'NikitaZavortny/react-awesome.git';

// Укажите имя локального каталога для клонирования
const localDirectory = './asd';
const prompt = require("prompt-sync")({ sigint: true });

// Команда для клонирования репозитория
let gitCloneCommand = "git clone https://github.com/NikitaZavortny/react-awesome.git";
const gitCloneCommandlite = "git clone https://github.com/NikitaZavortny/react-awesome-lite.git";
var input = prompt("Введите, какую версию Вы хотите установить: 1.React-awesome 2. React-awesome-lite: ");
console.log(input)
if (input == 2){
    gitCloneCommand = gitCloneCommandlite
}
// Выполнение команды клонирования
exec(gitCloneCommand, (error, stdout, stderr) => {
    if (error) {
        console.error("Ошибка при клонировании репозитория: "+{ error });
        return;
    }

    console.log("Репозиторий успешно клонирован");
});