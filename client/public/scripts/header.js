const header = document.querySelector('header')

const hero = document.createElement('div')
hero.className = 'hero'

// An <img> (not a CSS background) so the wiki's hotlink check sees no referrer
const heroImage = document.createElement('img')
heroImage.className = 'hero-bg'
heroImage.src = 'https://static.wikia.nocookie.net/hollowknight/images/0/05/Forgotten_Crossroads_Hot_Spring.png/revision/latest'
heroImage.alt = ''
heroImage.referrerPolicy = 'no-referrer'
hero.appendChild(heroImage)

const heroText = document.createElement('div')
heroText.className = 'hero-text'

const heroTitle = document.createElement('h1')
heroTitle.textContent = 'Hollow Knight'

const heroTagline = document.createElement('p')
heroTagline.textContent = 'For those who are tired of being repeatedly defeated by the bosses 💀'

heroText.appendChild(heroTitle)
heroText.appendChild(heroTagline)

const allBossesButton = document.createElement('a')
allBossesButton.textContent = 'All Bosses'
allBossesButton.href = '/'
allBossesButton.setAttribute('role', 'button')
allBossesButton.className = 'hero-button'

hero.appendChild(heroText)
hero.appendChild(allBossesButton)
header.appendChild(hero)
