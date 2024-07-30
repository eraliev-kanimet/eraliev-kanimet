import {DataTypes} from "sequelize";

import sequelize from "./sequelize.js"

const Form = sequelize.define("form", {
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    data: {
        type: DataTypes.JSON,
        allowNull: false,
    }
}, {
    updatedAt: "updated_at",
    createdAt: "created_at",
});

(async () => {
    await sequelize.sync();
})();

export default Form
