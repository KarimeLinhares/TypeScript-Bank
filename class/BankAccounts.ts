export abstract class BankAccounts {
	private readonly name: string;
	private readonly accountNumber: number;
	private balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	//name
	getName = (): string => {
		return this.name;
	};

	//depósito
	deposit = (value: number): void => {
		if (this.validateStatus()) {
			this.setBalance(value);
			console.log(
				`Depósito efetuado com sucesso! Saldo atual: R$${this.balance} `,
			);
		} else {
			console.log('Depósito não efetuado!');
		}
	};

	//saque
	withdraw = (value: number): void => {
		if (this.validateStatus()) {
			if (value <= this.balance) {
				this.balance -= value;
				console.log(
					`Saque efetuado com sucesso! Saldo atual: R$${this.balance} `,
				);
			} else {
				console.log('Saque não efetuado, saldo insuficiente.');
			}
		} else {
			console.log('Conta inválida.');
		}
	};

	//balanço da conta
	setBalance = (value: number): void => {
		this.balance += value;
	};

	getBalance = (): void => {
		console.log(`Saldo atual: R$${this.balance}`);
	};

	//retorna balanço na conta empresa
	returnBalance = () => {
		return this.balance;
	};

	//validação de status
	validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error('Conta inválida.');
	};
}
