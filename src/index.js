import app from "./app.js";
import config from "./config.js"
import {sequelize} from "./database/database.js";

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to SQL Server has been established successfully.");
        app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}`);
        });
    } catch (e) {
        console.error(e);
    }
}

main();
