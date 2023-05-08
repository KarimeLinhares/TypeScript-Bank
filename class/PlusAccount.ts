import { BankAccounts } from './BankAccounts';

export class PlusAccount extends BankAccounts {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	deposit = (value: number): void => {
		if (this.validateStatus()) {
			this.setBalance(value + 10);
			console.log(
				`Depósito efetuado com sucesso! Adicionando o valor de 10 reais ao saldo final ... Saldo atual: R$${this.returnBalance()}`,
			);
		} else {
			console.log('Depósito não efetuado!');
		}
	};
}
