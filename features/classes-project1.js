class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0;
	}

	withdraw (amount) {
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('withdrawel failed');
			return false;
		}
	}

	deposit (amount) {
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log('deposit failed');
			return false;
		}		
	}

	printBalance () {
		console.log(this.balance);		
	}
}

var account1 = new BankAccount(100);
account1.deposit(100);
account1.withdraw(10);
account1.printBalance();

var account2 = new BankAccount('dkdskd');
account2.deposit('dkdkd');
account2.withdraw('andndd');
account2.printBalance();