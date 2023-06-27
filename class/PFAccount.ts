import { Account } from "./Account"

export class PFAccount extends Account {
  cpf: number 

  constructor(cpf: number, name: string, accountNumber: number, balance: number, status: boolean){
    super(name, accountNumber, balance, status ) // responsável por inicializar a classe que estamos herdando
    this.cpf = cpf
  }
}