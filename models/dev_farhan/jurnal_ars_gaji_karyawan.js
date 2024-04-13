'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jurnal_ars_gaji_karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jurnal_ars_gaji_karyawan.init({
    nama_karyawan: DataTypes.STRING,
    periode: DataTypes.DATE,
    jumlah_penghasilan: DataTypes.DOUBLE,
    kode_pph21: DataTypes.STRING,
    ptkp_tahunan: DataTypes.DOUBLE,
    dasar_pengenaan_pajak: DataTypes.DOUBLE,
    tarif: DataTypes.DOUBLE,
    nominal_pph21: DataTypes.DOUBLE,
    nominal_takehomepay: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'jurnal_ars_gaji_karyawan',
    freezeTableName: true,
    timestamps: false 
  });
  return jurnal_ars_gaji_karyawan;
};