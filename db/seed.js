const chalk = require('chalk');

const User = require('./models');

const users = [
  { email: 'chalupa@apa.org', password: '1234', name: 'Chalupa', picture: '/img/chalupa.png', description: 'This happy young adult is a real people-pleaser, and would love to share a home with a fun active family.' },
  { email: 'cosmo@apa.org', password: '1234', name: 'Cosmo', picture: '/img/cosmo.png', description: 'If fetching and getting belly rubs were Olympic events, there\'s no question that I would bring home gold.' },
  { email: 'dodger@apa.org', password: '1234', name: 'Dodger', picture: '/img/dodger.png', description: 'I enjoy the finer things in life: treats, lounging with his people, sunbathing and doggie massages.' },
  { email: 'east@apa.org', password: '1234', name: 'East', picture: '/img/east.jpg', description: 'I\'m a pup who loves to be curled up next to you, whether it\'s up against your leg or in your lap.' },
  { email: 'kent@apa.org', password: '1234', name: 'Kent', picture: '/img/kent.png', description: 'I\'m a people pleaser. I\'ll do just about anything for a treat, whether it be agility or doing easy things like sitting.' },
  { email: 'loki@apa.org', password: '1234', name: 'Loki', picture: '/img/loki.jpg', description: 'I\'m a happy pup that constantly has a big, goofy grin on my face. I love being around my favorite people, cuddling, and playing tug-o-war.' },
  { email: 'pinball@apa.org', password: '1234', name: 'Pinball', picture: '/img/pinball.png', description: 'I have a wide variety of skills, and I\'m always eager to learn more! True to my name, I\'m active and love going on runs.' },
  { email: 'pugglestilskin@apa.org', password: '1234', name: 'Pugglestilskin', picture: '/img/pugglestilskin.jpg', description: 'Yes, someone actually named me that. No, you\'re not allowed to make fun of me for it. Or the tutu.' },
  { email: 'trooper@apa.org', password: '1234', name: 'Trooper', picture: '/img/trooper.jpg', description: 'I\'m an affectionate young guy who\'s always happy to see people, especially when they give me belly rubs!' }
];

User.remove()
.then(() => User.create(users, () => {
  console.log(chalk.green(`--- Seeded ${users.length} pups successfully. ---`));
  process.exit();
}));
