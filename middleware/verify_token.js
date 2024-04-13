const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    require('dotenv').config()
    
    const secretToken = process.env.ACCESS_TOKEN_SECRET

    console.log('check point : ' + new Date());
    // ambil request header
    const headRequest = req.headers.authorization;

    // memisahkan string token dari bearer
    const token = headRequest && headRequest.split(' ')[1];

    // kondisi jika token kosong
    if (token === null) return res.sendStatus(401);

    // memverifikasi token
    jwt.verify(token, secretToken, (err, decoded) => {
        if (err) return res.sendStatus(403);
        req.decoded = decoded
        // token = token
        next()
    })
}


module.exports = VerifyToken;