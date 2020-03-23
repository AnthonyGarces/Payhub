module.exports = function(sequelize, DataTypes) {
    
    const citation = sequelize('Citations', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        event: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        action: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return citation;
};