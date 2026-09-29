const slug = window.location.pathname.split('/').filter(Boolean).pop()

const show = (boss) => {
  const image = document.getElementById('image')
  image.src = boss.image
  image.alt = boss.name

  document.getElementById('name').textContent = boss.name
  document.getElementById('location').textContent = boss.location
  document.getElementById('health').textContent = `${boss.health} HP`
  document.getElementById('reward').textContent = boss.reward
  document.getElementById('description').textContent = boss.description
  document.title = `${boss.name} | Hollow Knight Bosses`
}

fetch('/bosses')
  .then(res => res.json())
  .then(bosses => {
    const boss = bosses.find(b => b.slug === slug?.toLowerCase())
    if (boss) show(boss)
    else window.location.replace('/404.html')
  })
