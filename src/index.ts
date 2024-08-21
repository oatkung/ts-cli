
//https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89
import clear from 'clear'
import chalk from 'chalk'
import figlet from 'figlet'
import { program} from 'commander'
import testProgram from './programs/test'
require('dotenv').config()

clear();

console.log(
  chalk.red(
    figlet.textSync('Typescript cli', { horizontalLayout: 'full' })
  )
);

// yarn run dev split --separator=/  a/b/c
program
  .command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(options)
    console.log(str.split(options.separator, limit));
  });


// yarn run dev login user 123456
program
  .command('login')
  .version('0.1.0')
  .argument('<username>', 'user to login')
  .argument('[password]', 'password for user, if required', 'no password given')
  .action((username, password, options) => {
    console.log('username:', username);
    console.log('password:', password);
    console.log(options)
  });

// yarn run dev download 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg'
program
  .command('download')
  .version('0.1.0')
  .argument('<url>', 'url to download')
  .action((url, options) => {
    testProgram.download(url)
  });


program.parse()


