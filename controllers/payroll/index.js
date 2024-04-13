const { Sequelize, jurnal_ars_gaji_karyawan } = require('../../models/dev_farhan/index');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const secretToken = 'secret'

class Payroll {
    static async get_all(req, res) {
        try {
            const getData = await jurnal_ars_gaji_karyawan.findAll();

            if (getData.length <= 0) {
                return res.status(400).json({ message: 'no data' });
            }

            return res.status(200).json({
                message: 'success',
                data: getData
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async get_id(req, res) {
        try {
            const { id } = req.params;
            const getData = await jurnal_ars_gaji_karyawan.findByPk(id)
            if (!getData) return res.json({ message: 'not found' })
            res.status(200).json({
                message: 'success',
                data: getData
            })
        } catch (error) {
            res.status(400).json({ message: 'error' })
            console.log(error);
        }
    }

    static async create(req, res) {
        try {
            const { id } = req.params
            const {
                nama_karyawan,
                periode,
                jumlah_penghasilan,
                kode_pph21,
                ptkp_tahunan,
                dasar_pengenaan_pajak,
                tarif,
                nominal_pph21,
                nominal_takehomepay
            } = req.body

            const updateUser = await jurnal_ars_gaji_karyawan.create({
                nama_karyawan: nama_karyawan,
                periode: periode,
                jumlah_penghasilan: jumlah_penghasilan,
                kode_pph21: kode_pph21,
                ptkp_tahunan: ptkp_tahunan,
                dasar_pengenaan_pajak: dasar_pengenaan_pajak,
                tarif: tarif,
                nominal_pph21: nominal_pph21,
                nominal_takehomepay: nominal_takehomepay
            })
            if (!updateUser) return res.json({ message: 'update failed' })
            res.status(200).json({
                message: 'success',
                data: req.body
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }


    static async update(req, res) {
        try {
            const { id } = req.params
            const {
                nama_karyawan,
                periode,
                jumlah_penghasilan,
                kode_pph21,
                ptkp_tahunan,
                dasar_pengenaan_pajak,
                tarif,
                nominal_pph21,
                nominal_takehomepay
            } = req.body

            const findData = await jurnal_ars_gaji_karyawan.findByPk(id)
            if (!findData) return res.json({ message: 'not found' })

            const updateUser = await findData.update({
                nama_karyawan: nama_karyawan,
                periode: periode,
                jumlah_penghasilan: jumlah_penghasilan,
                kode_pph21: kode_pph21,
                ptkp_tahunan: ptkp_tahunan,
                dasar_pengenaan_pajak: dasar_pengenaan_pajak,
                tarif: tarif,
                nominal_pph21: nominal_pph21,
                nominal_takehomepay: nominal_takehomepay
            })
            if (!updateUser) return res.json({ message: 'update failed' })
            res.status(200).json({
                message: 'success',
                data: req.body
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params
            const deleleUser = await jurnal_ars_gaji_karyawan.destroy({
                where: {
                    id: id
                }
            })
            if (!deleleUser) throw Error('cannot delete this id')
            res.status(200).json({
                message: 'success'
            })
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    }

}

module.exports = Payroll