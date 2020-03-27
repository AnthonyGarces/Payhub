var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  
    const User = sequelize.define("user", {
      // The email cannot be null, and must be a proper email before creation
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      //auth level will have a drop down with the options Employee, Manager, Admin
      authLevel: {
        type: DataTypes.STRING,
        allowNull: false
      },
      //username and password are used for auth/login purposes
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      manager: {
        type: DataTypes.STRING,
        allowNull: true
      },
      employmentDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: moment().format('l')
      }
    }); 

    // User.associate = function(models) {

    //   User.hasMany(models.timeCard, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });

    //   User.hasMany(models.ptoRequest, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });

    //   User.hasMany(models.expense, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });

    //   User.hasMany(models.citation, {
    //     foreignKey: {
    //       allowNull: true
    //     }
    //   });
    // };
  
    User.prototype.validPassword = function(password) {
      if (password === this.password) {
        return true;
      }};
  
    return User;
  };
  