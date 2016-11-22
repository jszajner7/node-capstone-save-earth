exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            'mongodb://jeffszajner:oliver71@ds019816.mlab.com:19816/node_capstone_save_earth' :
                            'mongodb://localhost/node_capstone_save_earth');
exports.PORT = process.env.PORT || 8080;