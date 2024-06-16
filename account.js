#! /usr/bin/env node
// File: account.ts
import chalk from "chalk";
export class Account {
    balance;
    accountNumber;
    fullName;
    constructor(fullName) {
        this.fullName = fullName;
        this.balance = 0;
        this.accountNumber = this.generateAccountNumber();
    }
    generateAccountNumber() {
        // Generate a random 8-digit account number
        return Math.random().toString().slice(2, 10);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.italic.bold.rgb(57, 255, 20)("Amount withdrawn successfully"));
            console.log(chalk.italic.bold.rgb(57, 255, 20)("Remaining Balance: " + this.balance));
        }
        else {
            console.log(chalk.red("Insufficient funds"));
        }
    }
    getBalance() {
        return this.balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getFullName() {
        return this.fullName;
    }
}
console.log(chalk.bgRed("Welcome to the Bank Account CLI!"));
