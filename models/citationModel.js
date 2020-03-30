module.exports = function(sequelize, DataTypes) {
    
    const citation = sequelize.define('Citations', {
        date: {
            type: DataTypes.DATE,
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

    citation.associate = function(models) {

        citation.belongsTo(models.user, {
            foreignKey: {
                allowNull: true
            }
        })
    };

    return citation;
};