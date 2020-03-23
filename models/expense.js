module.exports = function(sequelize, DataTypes) {

    const expense = sequelize.define('expenses', {
        item: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Approved: {
            type: DataTypes.Boolean,
            allowNull: false,
            defaultValue: false
        },

    });

    return expense;
};