module.exports = {
  admin: (req, res) => res.render('admin/admin', { title: 'Admin' }),
  createView: (req, res) => res.render('admin/create', { title: 'Crear' }),
  createItem: (req, res) => res.send('ruta para agregar un nuevo producto (POST)'),
  editView: (req, res) => res.render('admin/edit', { title: 'Editar', id: req.params.id }),
  editItem: (req, res) => res.send('ruta para editar un producto (PUT)'),
  delete: (req, res) => res.send('ruta para eliminar un producto (DELETE)')
};
