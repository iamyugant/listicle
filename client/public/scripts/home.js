const main = document.getElementById('main-content')

const card = (boss) => `
  <a class="boss-card" href="/bosses/${boss.slug}">
    <img src="${boss.image}" alt="${boss.name}" referrerpolicy="no-referrer" />
    <div class="boss-card-info">
      <h3>${boss.name}</h3>
      <small>📍 ${boss.location}</small>
      <p>${boss.description}</p>
    </div>
  </a>
`

fetch('/bosses')
  .then(res => res.json())
  .then(bosses => {
    main.innerHTML = bosses.map(card).join('')
  })
  .catch(() => {
    main.innerHTML = '<p class="load-error">Could not load the bosses.</p>'
  })
