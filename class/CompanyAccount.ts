import { BankAccounts } from './BankAccounts';

export class CompanyAccount extends BankAccounts {
	constructor(name: string, accountNumber: number) {
		super(name, accountNumber);
	}

	getLoan = (value: number): void => {
		if (this.validateStatus()) {
			this.setBalance(value);
			console.log(
				`Empréstimo efetuado com sucesso! Saldo atual: R$${this.returnBalance()}; `,
			);
		} else {
			console.log('Empréstimo não efetuado!');
		}
	};
}
