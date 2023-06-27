import { Account} from "./Account";

export class SpecialAccount extends Account{
  constructor(name: string, accountNumber: number, balance: number, status: boolean){
    super(name, accountNumber, balance, status)
  }

  specialDeposit = (amount: number): string => {
    if (this.validateAccountStatus()){
      this.balance += amount + 10
      return ('Depósito de ' + amount + ' efetuado. Seu novo saldo é R$:' + this.balance)
    } else {
      throw new Error('Conta está inativa, logo, não aceita novos depósitos.')
    }
  }
}
