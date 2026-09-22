const renderItems = async () => {
  const mainContent = document.getElementById('main-content')

  try {
    const response = await fetch('/bosses')
    const data = await response.json()

    data.forEach(boss => {
      const card = document.createElement('a')
      card.className = 'boss-card'
      card.href = `/bosses/${boss.slug}`

      const image = document.createElement('img')
      image.src = boss.image
      image.alt = boss.name
      image.referrerPolicy = 'no-referrer'

      const info = document.createElement('div')
      info.className = 'boss-card-info'

      const name = document.createElement('h3')
      name.textContent = boss.name

      const location = document.createElement('small')
      location.textContent = `📍 ${boss.location}`

      const description = document.createElement('p')
      description.textContent = boss.description

      info.appendChild(name)
      info.appendChild(location)
      info.appendChild(description)

      card.appendChild(image)
      card.appendChild(info)
      mainContent.appendChild(card)
    })
  } catch (error) {
    mainContent.innerHTML = '<p class="load-error">Could not load the bosses. Is the server running?</p>'
  }
}

renderItems()
