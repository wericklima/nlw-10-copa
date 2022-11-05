function createGame(player1, hour, player2) {
  return `
   <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>    
`
}

let delay = -0.4
function createCard(date, day, Games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay:${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${Games}
        <ul>
      </div>
`}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("cameroon", "07:00", "switzeland") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzeland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta-feira",
    createGame("south korea", "12:00", "portugal") +
      createGame("uruguay", "12:00", "ghana") +
      createGame("serbia", "16:00", "switzeland") +
      createGame("brazil", "16:00", "cameroon")
  )
