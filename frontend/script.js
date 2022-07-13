const btnGuardar = document.querySelector('#btn-savefile')
const btnSetPlayer = document.querySelector('#btn-setplayer')
console.log('holamundo')
let equipo = {};
let jugadores = [];

const setplayer = () => {
    const jugador = document.querySelector('.jugador');
    const row = document.createElement('tr')
    const td = document.createElement('td')
    td.textContent = jugador.value;
    jugadores.push(jugador.value)
    console.log(jugadores)
    const tbody = document.querySelector('tbody');
    row.appendChild(td)
    tbody.appendChild(row);


}

const savefile = () => {
    let filename = document.getElementById('equipo').value ===''?'Pais sin titulo':document.getElementById('equipo').value; 
    equipo.pais = filename
    equipo.jugadores = jugadores;
    fetch(`http://127.0.0.1:4999/api/dev/n/${filename}`,
    {method:"POST",
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(equipo) })
        .then(response => response.json())
        .then(data => console.log(data));
}





btnGuardar.addEventListener("click", savefile)
btnSetPlayer.addEventListener("click", setplayer)