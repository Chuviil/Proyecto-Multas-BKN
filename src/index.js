import app from "./app.js";
import config from "./config.js"
import {sequelize} from "./database/database.js";

import "./models/Profesor.js"
import "./models/Ayudante.js"
import "./models/Multa.js"

const main = async () => {
    try {
        await sequelize.sync({alter: true});
        app.listen(config.PORT, () => {
            console.log("Server is running on port", config.PORT);
        });
    } catch (e) {
        console.error(e);
    }
}

main();
