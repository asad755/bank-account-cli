// File: index.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
import { Account } from './account.js';
async function main() {
    console.log(chalk.blueBright('Welcome to the CLI Bank Account Manager'));
    const { fullName } = await inquirer.prompt({
        type: 'input',
        name: 'fullName',
        message: 'Enter your full name:'
    });
    const account = new Account(fullName);
    console.log(chalk.green(`Account created successfully. Your account number is ${account.getAccountNumber()}`));
    let exit = false;
    while (!exit) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Deposit', 'Withdraw', 'Check Balance', 'Exit']
        });
        switch (action) {
            case 'Deposit':
                const { depositAmount } = await inquirer.prompt({
                    type: 'input',
                    name: 'depositAmount',
                    message: 'Enter amount to deposit:',
                    validate: (input) => {
                        return !isNaN(Number(input)) && Number(input) > 0 ? true : 'Please enter a valid amount';
                    }
                });
                account.deposit(Number(depositAmount));
                console.log(chalk.green(`Successfully deposited ${depositAmount}. Current balance: ${account.getBalance()}`));
                break;
            case 'Withdraw':
                const { withdrawAmount } = await inquirer.prompt({
                    type: 'input',
                    name: 'withdrawAmount',
                    message: 'Enter amount to withdraw:',
                    validate: (input) => {
                        return !isNaN(Number(input)) && Number(input) > 0 ? true : 'Please enter a valid amount';
                    }
                });
                account.withdraw(Number(withdrawAmount));
                break;
            case 'Check Balance':
                console.log(chalk.yellow(`Current balance: ${account.getBalance()}`));
                break;
            case 'Exit':
                exit = true;
                console.log(chalk.blue('Thank you for using the CLI Bank Account Manager.'));
                break;
        }
    }
}
main();
