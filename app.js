let map;

let avioes = [
{
  nome:"LATAM 3050",
  lat:-23.5505,
  lon:-46.6333,
  velocidadeLat:0.05,
  velocidadeLon:0.03,
  altitude:35000,
  velocidade:850
},
{
  nome:"GOL 2022",
  lat:-22.9068,
  lon:-43.1729,
  velocidadeLat:0.04,
  velocidadeLon:-0.02,
  altitude:37000,
  velocidade:890
},
{
  nome:"AZUL 4001",
  lat:-15.7939,
  lon:-47.8828,
  velocidadeLat:-0.03,
  velocidadeLon:0.04,
  altitude:36000,
  velocidade:870
},
{
  nome:"EMIRATES 777",
  lat:25.2048,
  lon:55.2708,
  velocidadeLat:-0.02,
  velocidadeLon:-0.05,
  altitude:41000,
  velocidade:930
}
];

let marcadores = [];

document.getElementById("contador").innerText = avioes.length;

document.getElementById("goLive").addEventListener("click", iniciarRadar);

function iniciarRadar(){

  document.getElementById("goLive").style.display = "none";

  map = L.map("map").setView([-15,-55],3);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:"© OpenStreetMap"
  }).addTo(map);

  criarAvioes();

  setInterval(animarAvioes,1000);
}

function criarAvioes(){

  avioes.forEach(aviao=>{

    let marcador = L.marker([aviao.lat,aviao.lon])
    .addTo(map)
    .bindPopup(`
      <b>${aviao.nome}</b><br>
      Altitude: ${aviao.altitude} ft<br>
      Velocidade: ${aviao.velocidade} km/h
    `);

    marcadores.push(marcador);

  });

}

function animarAvioes(){

  avioes.forEach((aviao,index)=>{

    aviao.lat += aviao.velocidadeLat;
    aviao.lon += aviao.velocidadeLon;

    if(aviao.lat > 80) aviao.lat = -80;
    if(aviao.lat < -80) aviao.lat = 80;

    if(aviao.lon > 180) aviao.lon = -180;
    if(aviao.lon < -180) aviao.lon = 180;

    marcadores[index].setLatLng([aviao.lat,aviao.lon]);

  });

}
console.log("rodando");

document.getElementById("goLive").onclick = function () {
  alert("funcionou botão");

  let map = L.map("map").setView([-15,-55],3);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap"
  }).addTo(map);

  L.marker([-23.55, -46.63]).addTo(map).bindPopup("LATAM");
};