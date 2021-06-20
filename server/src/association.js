const Libro = require('./models/libro')
const Lector = require('./models/lector')
const Reserva = require('./models/reserva')

Libro.hasMany(Reserva, { as:'Libro', foreignKey: 'id_libro' })
Lector.hasMany(Reserva, { as: 'Lector', foreignKey: 'id_lector' })

Reserva.belongsTo(Libro, { foreignKey: 'id_libro' })
Reserva.belongsTo(Lector, { foreignKey: 'id_lector' })

