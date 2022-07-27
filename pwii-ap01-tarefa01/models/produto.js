module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define('produto', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    quantidade: {
        type: Sequelize.BIGINT,
        allowNull: false,
        allowEmpty: false
    },
  });

  return Produto;
};
