// Every boss shares the same attributes so this can move into a database in Unit 2.
const sprite = (file) => `https://static.wikia.nocookie.net/hollowknight/images/${file}/revision/latest`

const listData = [
  {
    id: 1,
    slug: 'brokenvessel',
    name: 'Broken Vessel',
    location: 'Ancient Basin',
    health: 525,
    reward: 'Monarch Wings',
    image: sprite('8/83/B_Broken_Vessel.png'),
    description: 'The shape of this creature... I have seen something like it before. More than once, perhaps. It looks a little like the bugs of Hallownest, but not quite the same. Where did these empty little wanderers come from?'
  },
  {
    id: 2,
    slug: 'crystalguardian',
    name: 'Crystal Guardian',
    location: 'Crystal Peak',
    health: 280,
    reward: 'Pale Ore (Enraged Guardian)',
    image: sprite('0/02/B_Crystal_Guardian.png'),
    description: 'How does the world look to this creature, gazing out from within its crystal prison? Does it see only light? Is that what drives it into a frenzy?'
  },
  {
    id: 3,
    slug: 'falseknight',
    name: 'False Knight',
    location: 'Forgotten Crossroads',
    health: 355,
    reward: '200 Geo',
    image: sprite('9/98/B_False_Knight.png'),
    description: 'Weak creatures love to steal the strength of others. Their lives are brief and fearful, and they yearn to have the power to dominate those who have dominated them.'
  },
  {
    id: 4,
    slug: 'gruzmother',
    name: 'Gruz Mother',
    location: 'Forgotten Crossroads',
    health: 90,
    reward: '80 Geo',
    image: sprite('9/9f/B_Gruz_Mother.png'),
    description: 'A bloated flying mother that slams into the walls of her nest while she sleeps. Defeat her and a swarm of hungry young bursts from her body.'
  },
  {
    id: 5,
    slug: 'hornet',
    name: 'Hornet Protector',
    location: 'Greenpath',
    health: 225,
    reward: 'Mothwing Cloak',
    image: sprite('8/89/B_Hornet.png'),
    description: 'I have seen this nimble little creature. I thought her prey and pounced at her, but with a flash she stabbed me with her flying stinger and darted away. Could she be... a Hunter?'
  },
  {
    id: 6,
    slug: 'mantislords',
    name: 'Mantis Lords',
    location: 'Fungal Wastes',
    health: 530,
    reward: 'Mark of Pride',
    image: sprite('2/2d/B_Mantis_Lords-2.png'),
    description: 'The Mantis tribe and the bugs of old Hallownest had no love for each other. The Mantises outlived their rivals though, and their civilisation still stands.'
  },
  {
    id: 7,
    slug: 'dungdefender',
    name: 'Dung Defender',
    location: 'Royal Waterways',
    health: 800,
    reward: "Defender's Crest",
    image: sprite('0/0e/B_Dung_Defender.png'),
    description: 'A cheerful knight of the Five Great Knights who rolls, leaps and hurls balls of dung. He fights for the honour of the combat rather than to kill.'
  },
  {
    id: 8,
    slug: 'hollowknight',
    name: 'Hollow Knight',
    location: 'Temple of the Black Egg',
    health: 1450,
    reward: 'Ending',
    image: sprite('1/12/B_Hollow_Knight.png'),
    description: 'The old King of Hallownest... he must have been desperate to save his crumbling little world. The sacrifices he imposed on others... all for nothing.'
  }
]

export default listData
