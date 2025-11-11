module.exports = {
  home: (req, res) => res.render('porta-3', { title: 'Inicio' }),
  contact: (req, res) => res.render('contact', { title: 'Contacto' }),
  about: (req, res) => res.render('about', { title: 'Sobre Nosotros' })
  
};
