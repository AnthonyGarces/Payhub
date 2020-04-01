module.exports = function(sequelize, DataTypes) {
    
    const timeCard = sequelize.define('timecard', {
        sunday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        monday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tuesday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        wednesday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        thursday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        friday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        saturday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        endofweek: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        
    });

    timeCard.associate = function(models) {

        timeCard.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return timeCard;
};
