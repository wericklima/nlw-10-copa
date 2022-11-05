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
`
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("states united", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça-feira",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "astraulia")
  ) +
  createCard(
    "23/11",
    "quarta-feira",
    createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta-feira",
    createGame("switzeland", "07:00", "cameroon") +
      createGame("south korea", "10:00", "uruguay") +
      createGame("ghana", "13:00", "portugal") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta-feira",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "sengal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "states united")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "07:00", "astralia") +
      createGame("poland", "10:00", "saudi arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "07:00", "costa rica") +
      createGame("morocco", "10:00", "belgium") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
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
    "29/11",
    "terça-feira",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("states united", "16:00", "iran") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta-feira",
    createGame("france", "12:00", "tunisia") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("mexico", "16:00", "saudi arabia")
  ) +
  createCard(
    "01/12",
    "quinta-feira",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco") +
      createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta-feira",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzeland") +
      createGame("brazil", "16:00", "cameroon")
  )

/*
 createCard(
    "24/11",
    "quinta",
    createGame("cameroon", "07:00", "switzeland") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "29/11",
    "segunda",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzeland") +
      createGame("portugal", "16:00", "uruguay")

*/
