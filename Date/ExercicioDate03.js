const dataAtual = new Date();

const options =  {
  weekday: 'long',
  month: "numeric",
  year: 'numeric',
  day: '2-digit',
};

console.log(dataAtual.getFullYear('en-US', options));