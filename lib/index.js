"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89
const clear_1 = __importDefault(require("clear"));
const chalk_1 = __importDefault(require("chalk"));
const figlet_1 = __importDefault(require("figlet"));
const commander_1 = require("commander");
const test_1 = __importDefault(require("./programs/test"));
require('dotenv').config();
(0, clear_1.default)();
console.log(chalk_1.default.red(figlet_1.default.textSync('Typescript cli', { horizontalLayout: 'full' })));
// yarn run dev split --separator=/  a/b/c
commander_1.program
    .command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(options);
    console.log(str.split(options.separator, limit));
});
// yarn run dev login user 123456
commander_1.program
    .command('login')
    .version('0.1.0')
    .argument('<username>', 'user to login')
    .argument('[password]', 'password for user, if required', 'no password given')
    .action((username, password, options) => {
    console.log('username:', username);
    console.log('password:', password);
    console.log(options);
});
// yarn run dev download 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg'
commander_1.program
    .command('download')
    .version('0.1.0')
    .argument('<url>', 'url to download')
    .action((url, options) => {
    test_1.default.download(url);
});
commander_1.program.parse();
