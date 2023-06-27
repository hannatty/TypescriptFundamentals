import { Account } from "./Account"

export class PJAccount extends Account {
  cnpj: number

  constructor(cnpj: number, name: string, accountNumber: number, balance: number, status: boolean){
    super(name, accountNumber, balance, status)
    this.cnpj = cnpj
  }

  getLoan = (loanValue: number): string => {
    if (this.validateAccountStatus()){
      this.balance +=  loanValue
        return ('Empréstimo efetuado. Seu novo saldo é R$:' + this.balance)
    } else {
      throw new Error ('Empréstimo não pôde ser efetuado.')
    }
  }

}