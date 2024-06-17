#! /usr/bin/env node

// File: account.ts

import chalk from "chalk";

export class Account {
    private balance: number;
    private accountNumber: string;
    private fullName: string;

    constructor(fullName: string) {
        this.fullName = fullName;
        this.balance = 0;
        this.accountNumber = this.generateAccountNumber();
    }

    private generateAccountNumber(): string {
        // Generate a random 8-digit account number
        return Math.random().toString().slice(2, 10);
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(chalk.italic.bold.rgb(57, 255, 20)("Amount withdrawn successfully"));
            console.log(chalk.italic.bold.rgb(57, 255, 20)("Remaining Balance: " + this.balance));
        } else {
            console.log(chalk.red("Insufficient funds"));
        }
    }

    getBalance(): number {
        return this.balance;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }

    getFullName(): string {
        return this.fullName;
    }
}
