const express = require('express');
const cors = require('cors');
const dbConection = require('../db/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.path = {
            auth: '/auth',
            products: '/productos',
        }

        this.middlewares();
        this.routes();
        this.dbconection();
    }

    async dbconection() {
        await dbConection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.path.auth, require('../routes/auth'));
        this.app.use(this.path.products, require('../routes/productos'));
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}

module.exports = Server;