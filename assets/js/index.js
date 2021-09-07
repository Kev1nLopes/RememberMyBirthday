
const proximoAno = new Date().getFullYear() + 1; //Ano atual + 1, no caso salvando o proximo ano em uma variavel;
const aniversario = new Date(`January 18 ${proximoAno} 00:00:00`); //Armazenando a data de aniversario e garantindo que a contagem mude de ano a ano;


const updateCountdown =  () => {
    const dataAtual = new Date();
    const diferenca = aniversario - dataAtual;
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    const minutos = Math.floor(diferenca / 1000 / 60) % 60
    const segundos = Math.floor(diferenca / 1000 ) %60
    // dividir por 1000 para transformar milisegundos em segundos.
    // dividir por 60 para transforma segundos em minutos
    // dividir por 60 dnv para transformar minutos em horas
    // dividir por 24 para transformar em dias, um dia tem 24 horas
    changeContent(dias,horas,minutos,segundos);
}
function changeContent(d,h,m,s){
    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}

setInterval(updateCountdown, 1000);




