// The wiki serves a placeholder unless the request carries no referrer, which
// rules out a CSS background-image.
const banner = 'https://static.wikia.nocookie.net/hollowknight/images/0/05/Forgotten_Crossroads_Hot_Spring.png/revision/latest'

document.querySelector('header').innerHTML = `
  <div class="hero">
    <img class="hero-bg" src="${banner}" alt="" referrerpolicy="no-referrer" />
    <div class="hero-text">
      <h1>Hollow Knight</h1>
      <p>For those who are tired of being repeatedly defeated by the bosses 💀</p>
    </div>
    <a class="hero-button" href="/" role="button">All Bosses</a>
  </div>
`
