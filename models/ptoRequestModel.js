module.exports = function(sequelize, DataTypes) {
    
    const ptoRequest = sequelize.define('pto', {
    
        startDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        Hours : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Approved: {
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