module.exports = function(sequelize) {
    const User = sequelize.define("user", {
      // The email cannot be null, and must be a proper email before creation
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      // The password cannot be null
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    User.prototype.validPassword = function(password) {
      if (password === this.password) {
        return true;
      }};
  
    return User;
  };
  