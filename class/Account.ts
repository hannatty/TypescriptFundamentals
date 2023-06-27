export abstract class Account {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 0;
  private status: boolean = true;

  constructor(
    name: string,
    accountNumber: number,
    balance: number = 0,
    status: boolean = true
  ) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
  }

  //Setters and Getters

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso.')
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }

  setStatus = (status: boolean): void => {
    this.status = status
    console.log('Status alterado com sucesso.') 
  }

  getStatus = (): boolean => {
    return this.status
  }

  protected validateAccountStatus = (): boolean => {
    if (this.status){
      return this.status
    } 

    throw new Error('Conta Inválida')

  }

  getBalance = (): number => {
    return  (this.balance)
  }

  deposit = (amount: number): string => {
    if (this.validateAccountStatus()){
      this.balance += amount
      return ('Depósito de ' + amount + ' efetuado.')
    } else {
      throw new Error('Conta está inativa, logo, não aceita novos depósitos.')
    }
  }
  

  withDraw =(value: number): string => {
    if (this.validateAccountStatus()){
      if (this.balance >= value) {
        this.balance -= value
        return ('Saque de R$:' + value +  ' foi efetuado com sucesso. Novo saldo R$:' + this.balance);
      } else {
        throw new Error('Saldo insuficiente.')
      }
    } else {
      throw new Error('Conta está inativa, logo, não aceita novos depósitos.')
    }
  }

}
