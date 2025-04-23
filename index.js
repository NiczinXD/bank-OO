class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const cliente3 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 12345678900;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.cpf = "Alice";
cliente2.cpf = 82345678900;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = "Alice";
cliente3.cpf = 82345678900;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1, cliente2, cliente3);