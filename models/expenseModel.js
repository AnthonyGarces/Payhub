module.exports = function(sequelize, DataTypes) {

    const expense = sequelize.define('expenses', {
        item: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        cost: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vendor: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        approved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

    });

    expense.associate = function(models) {

        expense.belongsTo(models.user, {
            foreignKey: {
                allowNull: true
            }
        })
    };

    return expense;
};