module.exports = (sequelize, DataTypes) => {

    const EmpType = sequelize.define("employee_types",{
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
    )
    return EmpType;
}