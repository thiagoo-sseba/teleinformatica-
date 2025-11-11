module.exports = {
  shop: (req, res) => res.render('shop/shop', { title: 'Portfolio' }),
  item: (req, res) => res.render('shop/item', { title: 'Detalle del Documento', id: req.params.id }),
  addItem: (req, res) => res.send('ruta para agregar un item (POST)'),
  cart: (req, res) => res.render('shop/cart', { title: 'Carrito' }),
  addCart: (req, res) => res.send('ruta para proceder a la compra (POST)')
};
