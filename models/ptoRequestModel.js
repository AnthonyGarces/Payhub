module.exports = function(sequelize, DataTypes) {
    
    const ptoRequest = sequelize.define('pto', {
    
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        hours : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    ptoRequest.associate = function(models) {

        ptoRequest.belongsTo(models.user, {
            foreignKey: {
                allowNull: true
            }
        });
    }

    return ptoRequest;
};