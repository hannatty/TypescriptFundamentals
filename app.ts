import { PFAccount } from "./class/PFAccount"
import { PJAccount } from "./class/PJAccount"
import { SpecialAccount } from "./class/SpecialAccount"

//Instanciação de objeto Pessoa Física
const pf1: PFAccount = new PFAccount(1111, 'Clara', 8801, 0, true)
console.log('ABERTURA DE CONTA DE PESSOA FÍSICA')
console.log('*****************************************************************')
console.log('Conta de pessoa física ' + pf1.getName() + ' criada com sucesso.')
console.log('Informações da Conta:')
console.log(pf1)
console.log('*****************************************************************')
console.log(pf1.deposit(120))
console.log(pf1.getBalance())
console.log(pf1.withDraw(100))
console.log('*****************************************************************')


//Object instantiation - Pessoa Jurídica
console.log('ABERTURA DE CONTA DE EMPRESA OU PESSOA JURÍDICA')
const pj1: PJAccount = new PJAccount(2222, 'Impact Tech', 9901, 0, true)
console.log('Conta da empresa ' + pj1.getName() + ' criada com sucesso.')
console.log('Informações da Conta:')
console.log(pj1)
console.log('*****************************************************************')
console.log(pj1.getLoan(5950))
console.log('*****************************************************************')

//Instanciação de objeto de conta especial
const special1: SpecialAccount = new SpecialAccount('Enzo Patrício', 7701, 0, true)
console.log('ABERTURA DE CONTA ESPECIAL')
console.log('*****************************************************************')
console.log('Conta especial de ' + pf1.getName() + ' criada com sucesso.')
console.log('Informações da Conta:')
console.log(special1)
console.log('*****************************************************************')
console.log(special1.specialDeposit(1990))
console.log(special1.getBalance())
console.log('*****************************************************************')

