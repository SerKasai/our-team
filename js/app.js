console.log('Our Team')

// STEP 1
// Creare struttura dei dati partendo da un singolo oggetto e dall'array con i vari oggetti.

const team = [
  {
    name: 'Wayne Bennet',
    title: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    title: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    title: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    title: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    title: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    title: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  }
];

// console.log(team);
// console.log(team.name)


const membri = document.querySelector('.team-container');

console.log(membri)

// STEP 2
// Ciclare e usare console.log per stampare le singole proprietà che bisogna poi mettere nell'HTML.
// Stampare in console per ogni oggetto: Nome, url dell'immagine e Job title

for (const key in team) {
  const element = team[key];
  console.log(`${key} :`, element)
}

for (let i = 0; i < team.length; i++) {
  const lista = team[i];

  const nameTeam = team[i].name
  const jobTitle = team[i].title
  const imgUrl = team[i].image
  console.log(nameTeam, jobTitle, imgUrl)
  console.log(lista)

  // STEP 3
  // Inserire i 3 valori nell'HTML

  const card = `
  <div class="team-card">
    <div class="card-image">
      <img src = "${imgUrl}"
      alt = "${nameTeam}"
      />
    </div>
    <div class="card-text">
      <h3>${nameTeam}</h3>
      <p>${jobTitle}</p>
    </div>
  </div>
  `
  console.log(card)

  // STEP 4
  // Inserire stringa HTML nel DOM

  membri.innerHTML += `
  <div class="team-card">
    <div class="card-image">
      <img src="img/${imgUrl}" alt="${nameTeam}"/>
    </div>
    <div class="card-text">
      <h3>${nameTeam}</h3>
      <p>${jobTitle}</p>
    </div>
  </div>
  `

}







// const card = `
//    <div class="team-card">
//      <div class="card-image">
//        <img src = "${imgUrl}"
//        alt = "${nameTeam}"
//        />
//      </div>
//      <div class="card-text">
//        <h3>${nameTeam}</h3>
//        <p>${jobTitle}</p>
//      </div>
//    </div>
//    `