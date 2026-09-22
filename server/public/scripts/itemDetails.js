const renderItem = async () => {
  const requestedSlug = window.location.pathname.split('/').filter(Boolean).pop()
  const response = await fetch('/bosses')
  const data = await response.json()

  const boss = data.find(b => b.slug === requestedSlug?.toLowerCase())

  if (!boss) {
    window.location.href = '/404.html'
    return
  }

  document.getElementById('image').src = boss.image
  document.getElementById('image').alt = boss.name
  document.getElementById('name').textContent = boss.name
  document.getElementById('location').textContent = boss.location
  document.getElementById('health').textContent = `${boss.health} HP`
  document.getElementById('reward').textContent = boss.reward
  document.getElementById('description').textContent = boss.description
  document.title = `${boss.name} | Hollow Knight Bosses`
}

renderItem()
