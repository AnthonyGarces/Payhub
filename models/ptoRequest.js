module.exports = function(sequelize, DataTypes) {
    
    const ptoRequest = sequelize('pto', {
    
        startDate: {
            type: DataTypes.ONLYDATE,
            allowNull: false
        },
        endDate: {
            type: DataTypes.ONLYDATE,
            allowNull: true
        },
        Hours : {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        Approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return ptoRequest;
};