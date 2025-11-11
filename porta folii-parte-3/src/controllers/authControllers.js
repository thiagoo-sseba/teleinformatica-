module.exports = {
  login: (req, res) => res.render('auth/login', { title: 'Login' }),
  doLogin: (req, res) => res.send('ruta que valida datos del login (POST)'),
  register: (req, res) => res.render('auth/register', { title: 'Registro' }),
  doRegister: (req, res) => res.send('ruta que crea nuevo usuario (POST)'),
  logout: (req, res) => res.send('ruta que cierra sesión')
};
