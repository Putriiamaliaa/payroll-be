const { Sequelize, app_login } = require('../../models/dev_farhan_ref/index');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

class Auth {
    static async login(req, res) {
        try {
            require('dotenv').config()

            const secretToken = process.env.ACCESS_TOKEN_SECRET
            const { username, password } = req.body;


            const user = await app_login.findOne({ where: { username } });

            if (!user) {
                return res.status(400).json({ message: 'username not found' });
            }

            const match = await bcrypt.compare(password, user.password);

            if (!match) {
                return res.status(400).json({ message: 'wrong username or password' });
            }

            const userStruct = {
                id: user.id,
                username: user.username,
                full_name: user.full_name,
                rs_key: user.rs_key,
                refresh_token: user.refresh_token,
                refresh_token_expired: user.refresh_token_expired,
            };

            const options = {
                expiresIn: Math.floor((user.refresh_token_expired - Date.now()) * 100000),
            };

            const accessToken = await jwt.sign(userStruct, secretToken, options);

            return res.status(200).json({
                message: 'success',
                access_token: accessToken,
                token_type: "bearer"
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Auth