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