import { CompanyAccount } from './class/CompanyAccount';
import { NormalAccount } from './class/NormalAccount';
import { PlusAccount } from './class/PlusAccount';

const normalAccount: NormalAccount = new NormalAccount(1, 'Nath', 10);
console.log(normalAccount);
normalAccount.deposit(10);
normalAccount.getBalance();
normalAccount.withdraw(5);
normalAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.getLoan(100);

const plusAccount: PlusAccount = new PlusAccount('Karime Linhares', 1);
plusAccount.deposit(100);
