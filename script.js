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
// ==========================
// =======================================
// FUNÇÃO PARA RESETAR AVIÃO
// =======================================

function reiniciarAviao(
    aviao,
    dados
){

    dados.x = dados.inicioX;
    dados.y = dados.inicioY;

    dados.angulo =
    dados.anguloInicial;

    dados.curva = false;
}


// =======================================
// AVIÃO 1
// =======================================

let dados1 = {

    x:100,
    y:150,

    inicioX:100,
    inicioY:150,

    angulo:0,
    anguloInicial:0,

    curva:false
};

setTimeout(() => {

    setInterval(() => {

        // RETO
        if(!dados1.curva){

            dados1.x += 2;

            if(dados1.x >= 600){

                dados1.curva = true;
            }
        }

        // CURVA
        else if(dados1.angulo < 1.5){

            dados1.angulo += 0.02;

            dados1.x +=
            Math.cos(dados1.angulo) * 2;

            dados1.y +=
            Math.sin(dados1.angulo) * 2;
        }

        // RETO FINAL
        else{

            dados1.x +=
            Math.cos(dados1.angulo) * 2;

            dados1.y +=
            Math.sin(dados1.angulo) * 2;
        }

        aviao1.style.left =
        dados1.x + "px";

        aviao1.style.top =
        dados1.y + "px";

        aviao1.style.transform =
        `rotate(${dados1.angulo * 57}deg)`;

        // REAPARECE
        if(
            dados1.x > window.innerWidth + 200 ||
            dados1.y > window.innerHeight + 200
        ){

            reiniciarAviao(
                aviao1,
                dados1
            );
        }

    }, 16);

}, 0);


// =======================================
// AVIÃO 2
// =======================================

let dados2 = {

    x:1400,
    y:220,

    inicioX:1400,
    inicioY:220,

    angulo:Math.PI,
    anguloInicial:Math.PI,

    curva:false
};

setTimeout(() => {

    setInterval(() => {

        if(!dados2.curva){

            dados2.x -= 2;

            if(dados2.x <= 700){

                dados2.curva = true;
            }
        }

        else if(dados2.angulo < 4.3){

            dados2.angulo += 0.018;

            dados2.x +=
            Math.cos(dados2.angulo) * 2;

            dados2.y +=
            Math.sin(dados2.angulo) * 2;
        }

        else{

            dados2.x +=
            Math.cos(dados2.angulo) * 2;

            dados2.y +=
            Math.sin(dados2.angulo) * 2;
        }

        aviao2.style.left =
        dados2.x + "px";

        aviao2.style.top =
        dados2.y + "px";

        aviao2.style.transform =
        `rotate(${dados2.angulo * 57}deg)`;

        if(
            dados2.x < -200 ||
            dados2.y > window.innerHeight + 200
        ){

            reiniciarAviao(
                aviao2,
                dados2
            );
        }

    }, 16);

}, 2000);


// =======================================
// AVIÃO 3
// =======================================

let dados3 = {

    x:500,
    y:900,

    inicioX:500,
    inicioY:900,

    angulo:-1.5,
    anguloInicial:-1.5,

    curva:false
};

setTimeout(() => {

    setInterval(() => {

        if(!dados3.curva){

            dados3.y -= 2;

            if(dados3.y <= 300){

                dados3.curva = true;
            }
        }

        else if(dados3.angulo < 0.3){

            dados3.angulo += 0.015;

            dados3.x +=
            Math.cos(dados3.angulo) * 2;

            dados3.y +=
            Math.sin(dados3.angulo) * 2;
        }

        else{

            dados3.x +=
            Math.cos(dados3.angulo) * 2;

            dados3.y +=
            Math.sin(dados3.angulo) * 2;
        }

        aviao3.style.left =
        dados3.x + "px";

        aviao3.style.top =
        dados3.y + "px";

        aviao3.style.transform =
        `rotate(${dados3.angulo * 57}deg)`;

        if(
            dados3.x > window.innerWidth + 200 ||
            dados3.y < -200
        ){

            reiniciarAviao(
                aviao3,
                dados3
            );
        }

    }, 16);

}, 4000);


// =======================================
// AVIÃO 4
// =======================================

let dados4 = {

    x:-200,
    y:500,

    inicioX:-200,
    inicioY:500,

    angulo:0,
    anguloInicial:0,

    curva:false
};

setTimeout(() => {

    setInterval(() => {

        if(!dados4.curva){

            dados4.x += 1.8;

            if(dados4.x >= 900){

                dados4.curva = true;
            }
        }

        else if(dados4.angulo < 1.2){

            dados4.angulo += 0.02;

            dados4.x +=
            Math.cos(dados4.angulo) * 2;

            dados4.y +=
            Math.sin(dados4.angulo) * 2;
        }

        else{

            dados4.x +=
            Math.cos(dados4.angulo) * 2;

            dados4.y +=
            Math.sin(dados4.angulo) * 2;
        }

        aviao4.style.left =
        dados4.x + "px";

        aviao4.style.top =
        dados4.y + "px";

        aviao4.style.transform =
        `rotate(${dados4.angulo * 57}deg)`;

        if(
            dados4.x > window.innerWidth + 200 ||
            dados4.y > window.innerHeight + 200
        ){

            reiniciarAviao(
                aviao4,
                dados4
            );
        }

    }, 16);

}, 6000);


// =======================================
// AVIÃO 5
// =======================================

let dados5 = {

    x:1600,
    y:650,

    inicioX:1600,
    inicioY:650,

    angulo:Math.PI,
    anguloInicial:Math.PI,

    curva:false
};

setTimeout(() => {

    setInterval(() => {

        if(!dados5.curva){

            dados5.x -= 2;

            if(dados5.x <= 800){

                dados5.curva = true;
            }
        }

        else if(dados5.angulo < 4.1){

            dados5.angulo += 0.014;

            dados5.x +=
            Math.cos(dados5.angulo) * 2;

            dados5.y +=
            Math.sin(dados5.angulo) * 2;
        }

        else{

            dados5.x +=
            Math.cos(dados5.angulo) * 2;

            dados5.y +=
            Math.sin(dados5.angulo) * 2;
        }

        aviao5.style.left =
        dados5.x + "px";

        aviao5.style.top =
        dados5.y + "px";

        aviao5.style.transform =
        `rotate(${dados5.angulo * 57}deg)`;

        if(
            dados5.x < -200 ||
            dados5.y > window.innerHeight + 200
        ){

            reiniciarAviao(
                aviao5,
                dados5
            );
        }

    }, 16);

}, 8000);


// =======================================
// AVIÃO 6
// =======================================

let dados6 = {

    x:900,
    y:-200,

    inicioX:900,
    inicioY:-200,

    angulo:1.5,
    anguloInicial:1.5,

    curva:false
};

setTimeout(() => {

    setInterval(() => {

        if(!dados6.curva){

            dados6.y += 2;

            if(dados6.y >= 400){

                dados6.curva = true;
            }
        }

        else if(dados6.angulo < 3){

            dados6.angulo += 0.017;

            dados6.x +=
            Math.cos(dados6.angulo) * 2;

            dados6.y +=
            Math.sin(dados6.angulo) * 2;
        }

        else{

            dados6.x +=
            Math.cos(dados6.angulo) * 2;

            dados6.y +=
            Math.sin(dados6.angulo) * 2;
        }

        aviao6.style.left =
        dados6.x + "px";

        aviao6.style.top =
        dados6.y + "px";

        aviao6.style.transform =
        `rotate(${dados6.angulo * 57}deg)`;

        if(
            dados6.x < -200 ||
            dados6.y > window.innerHeight + 200
        ){

            reiniciarAviao(
                aviao6,
                dados6
            );
        }

    }, 16);

}, 10000);
}