const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

const garderie = {
  nom: 'Ma Garderie',
  slogan: 'Un petit monde de joie et de sécurité',
  description: "Ma Garderie accueille vos enfants de 6 mois à 5 ans dans un cadre chaleureux, sécurisé et stimulant.",
  adresse: 'Tozeur, Tunisie',
  telephone: '+216 00 000 000',
  horaires: 'Lundi - Vendredi : 7h30 - 18h00'
};

const services = [
  { id: 1, nom: 'Accueil du matin', description: "Accueil en douceur dès 7h30.", icone: '🌅' },
  { id: 2, nom: 'Repas équilibrés', description: 'Repas et goûters préparés chaque jour.', icone: '🍎' },
  { id: 3, nom: 'Éveil et jeux', description: "Jeux éducatifs adaptés à chaque âge.", icone: '🧸' },
  { id: 4, nom: 'Sieste', description: 'Espace calme pour un repos réparateur.', icone: '😴' }
];

const activites = [
  { id: 1, nom: 'Peinture', horaire: '9h30', description: 'Atelier de peinture et de coloriage.' },
  { id: 2, nom: 'Chansons et comptines', horaire: '10h30', description: 'Musique et éveil sonore.' },
  { id: 3, nom: 'Jeux dehors', horaire: '16h00', description: 'Jeux libres dans le jardin.' }
];

app.get('/api/garderie', (req, res) => res.json(garderie));
app.get('/api/services', (req, res) => res.json(services));
app.get('/api/activites', (req, res) => res.json(activites));

app.listen(PORT, '0.0.0.0', () => console.log(`Backend démarré sur le port ${PORT}`));
