window.onload = function(){
// AVIÕES
const aviao1 =
document.getElementById("aviao1");
const aviao2 =
document.getElementById("aviao2");
const aviao3 =
document.getElementById("aviao3");
const aviao4 =
document.getElementById("aviao4");
const aviao5 =
document.getElementById("aviao5");
const aviao6 =
document.getElementById("aviao6");



// PAINEL
const info =
document.getElementById("info");
// DADOS
const dados = {
aviao1: {
        voo:"LATAM 3050",
        tipo:"Boeing 777",
        velocidade:"850 km/h",
        altitude:"38.000 pés",
        rota:"Guarulhos → Lima"
    },
aviao2: {
        voo:"GOL 2201",
        tipo:"Boeing 737 MAX",
        velocidade:"780 km/h",
        altitude:"36.000 pés",
        rota:"Rio → Brasília"
    },
aviao3: {
        voo:"AZUL 9870",
        tipo:"Airbus A320",
        velocidade:"720 km/h",
        altitude:"34.000 pés",
        rota:"Campinas → Recife"
    },
aviao4: {
    voo:"EMIRATES 240",
    tipo:"Airbus A380",
    velocidade:"920 km/h",
    altitude:"41.000 pés",
    rota:"Dubai → Guarulhos"
},
aviao5: {
    voo:"AMERICAN 880",
    tipo:"Boeing 787",
    velocidade:"890 km/h",
    altitude:"39.000 pés",
    rota:"Miami → São Paulo"
},
aviao6: {
    voo:"AIR FRANCE 440",
    tipo:"Airbus A350",
    velocidade:"870 km/h",
    altitude:"40.000 pés",
    rota:"Paris → Rio"
},

};
// MOSTRAR INFO
function mostrar(dado){
    info.innerHTML = `
    ✈ <b>${dado.voo}</b>
    <br><br>
    🛩️ Tipo:
    ${dado.tipo}
    <br><br>
    🚀 Velocidade:
    ${dado.velocidade}
    <br><br>
    📍 Altitude:
    ${dado.altitude}
    <br><br>
    🗺️ Rota:
    ${dado.rota}
    `;
}
// CLIQUES
aviao1.onclick =
() => mostrar(dados.aviao1);
aviao2.onclick =
() => mostrar(dados.aviao2);
aviao3.onclick =
() => mostrar(dados.aviao3);
aviao4.onclick =
() => mostrar(dados.aviao4);
aviao5.onclick =
() => mostrar(dados.aviao5);
aviao6.onclick =
() => mostrar(dados.aviao6);

// POSIÇÕES
let x1 = -300;
let y1 = 700;

let x2 = 1600;
let y2 = 100;

let x3 = 1200;
let y3 = 900;

let x4 = -400;
let y4 = 200;

let x5 = 1800;
let y5 = 600;

let x6 = 1400;
let y6 = -300;

// ANIMAÇÃO
function mover(){
    // AVIÃO 1
    x1 += 2;
    y1 -= 1;
    if(x1 > window.innerWidth){
        x1 = -100;
        y1 = 500;
    }
    aviao1.style.left =
    x1 + "px";
    aviao1.style.top =
    y1 + "px";
    aviao1.style.transform =
    "rotate(-20deg)";
    // AVIÃO 2
    x2 -= 2;
    y2 += 1;
    if(x2 < -100){
        x2 = window.innerWidth;
        y2 = 200;
    }
    aviao2.style.left =
    x2 + "px";
    aviao2.style.top =
    y2 + "px";
    aviao2.style.transform =
    "rotate(140deg)";
    // AVIÃO 3
    x3 -= 1.5;
    y3 -= 1;
    if(y3 < -100){
        x3 = 700;
        y3 = window.innerHeight;
    }
    aviao3.style.left =
    x3 + "px";
    aviao3.style.top =
    y3 + "px";
    aviao3.style.transform =
    "rotate(-130deg)";
    // AVIÃO 4
x4 += 1.8;
y4 += 1;
if(x4 > window.innerWidth){
    x4 = -100;
    y4 = 100;
}
aviao4.style.left =
x4 + "px";
aviao4.style.top =
y4 + "px";
aviao4.style.transform =
"rotate(35deg)";
// AVIÃO 5
x5 -= 2;
y5 -= 0.8;
if(x5 < -100){
    x5 = window.innerWidth;
    y5 = 500;
}
aviao5.style.left =
x5 + "px";
aviao5.style.top =
y5 + "px";
aviao5.style.transform =
"rotate(-140deg)";
// AVIÃO 6
x6 -= 1.5;
y6 += 1;
if(y6 > window.innerHeight){
    x6 = 900;
    y6 = -100;
}
aviao6.style.left =
x6 + "px";
aviao6.style.top =
y6 + "px";
aviao6.style.transform =
"rotate(120deg)";
}
// LOOP
// AVIÃO 1
setTimeout(() => {
    setInterval(() => {
        x1 += 1.2;
        y1 -= 0.6;
        if(x1 > window.innerWidth){
            x1 = -200;
            y1 = 600;
        }
        aviao1.style.left =
        x1 + "px";
        aviao1.style.top =
        y1 + "px";
        aviao1.style.transform =
        "rotate(-20deg)";
    }, 16);
}, 1000);
// AVIÃO 2
setTimeout(() => {
    setInterval(() => {
        x2 -= 1.1;
        y2 += 0.5;
        if(x2 < -200){
            x2 = window.innerWidth + 200;
            y2 = 150;
        }
        aviao2.style.left =
        x2 + "px";
        aviao2.style.top =
        y2 + "px";
        aviao2.style.transform =
        "rotate(140deg)";
    }, 16);
}, 8000);
// AVIÃO 3
setTimeout(() => {
    setInterval(() => {
        x3 -= 1;
        y3 -= 0.5;
        if(y3 < -200){
            x3 = 900;
            y3 = window.innerHeight + 200;
        }
        aviao3.style.left =
        x3 + "px";
        aviao3.style.top =
        y3 + "px";
        aviao3.style.transform =
        "rotate(-130deg)";
    }, 16);
}, 15000);
// AVIÃO 4
setTimeout(() => {
    setInterval(() => {
        x4 += 1;
        y4 += 0.5;
        if(x4 > window.innerWidth + 200){
            x4 = -200;
            y4 = 100;
        }
        aviao4.style.left =
        x4 + "px";
        aviao4.style.top =
        y4 + "px";
        aviao4.style.transform =
        "rotate(35deg)";
    }, 16);
}, 22000);
// AVIÃO 5
setTimeout(() => {
    setInterval(() => {
        x5 -= 1.2;
        y5 -= 0.4;
        if(x5 < -200){
            x5 = window.innerWidth + 200;
            y5 = 500;
        }
        aviao5.style.left =
        x5 + "px";
        aviao5.style.top =
        y5 + "px";
        aviao5.style.transform =
        "rotate(-140deg)";
    }, 16);
}, 30000);
// AVIÃO 6
setTimeout(() => {
    setInterval(() => {
        x6 -= 0.9;
        y6 += 0.6;
        if(y6 > window.innerHeight + 200){
            x6 = 1000;
            y6 = -200;
        }
        aviao6.style.left =
        x6 + "px";
        aviao6.style.top =
        y6 + "px";
        aviao6.style.transform =
        "rotate(120deg)";
    }, 16);
}, 38000);
};