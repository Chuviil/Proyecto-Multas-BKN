import app from "./app.js";
import config from "./config.js"
import {sequelize} from "./database/database.js";
import {swaggerDocs} from "./swagger/swagger.js";

const main = async () => {
    try {
        await sequelize.sync({force: false});
        app.listen(config.PORT, () => {
            swaggerDocs(app, config.PORT);
            console.log("Server is running on port", config.PORT);
        });
    } catch (e) {
        console.error(e);
    }
}

main();
