// Crie um código que armazene a data atual do sistema e que altera respectivamente:
// - A hora para 20;
// - Os minutos para 0;
// - Os segundos para 0.

const hoje = new Date();

hoje.setHours(20);
hoje.setMinutes(0);
hoje.setSeconds(0);

console.log(hoje.toLocaleTimeString());