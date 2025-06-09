console.log('Our Team')

// STEP 1
// Creare struttura dei dati partendo da un singolo oggetto e dall'array con i vari oggetti.

// STEP 2
// Ciclare e usare console.log per stampare le singole proprietà che bisogna poi mettere nell'HTML.
// Stampare in console per ogni oggetto: Nome, url dell'immagine e Job title

// STEP 3
// Inserire i 3 valori nell'HTML

// STEP 4
// Inserire stringa HTML nel DOM


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