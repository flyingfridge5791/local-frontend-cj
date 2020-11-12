const mongodb = require('mongoose');
const userSchemaImport = require('./userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

exports.registerUser = (req,res) => {

    userSchemaImport.find({ email: req.body.email })
    .then(inUse => {
        if(inUse.length > 0) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: "User E-mail already exists.",
            })
        }

        const passwordSalt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password , passwordSalt, (err, hash) => {
            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status:     false,
                    message:    'Failed to hash up the password yknowhaimsayin.'
                })
            }

            const user = new userSchemaImport ({
                _id:            new mongodb.Types.ObjectId,
                firstName:      req.body.firstName,
                lastName:       req.body.lastName,
                email:          req.body.email,
                passwordHash:   hash
            })

            user.save()
            .then(() => {
                res.status(201).json({
                    statusCode: 201,
                    status:     true,
                    message:    'SUCCESS!'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'FAILURE',
                });
            });
        });
    });
};

exports.loginUser = (req, res) => {
    userSchemaImport.findOne({ email: req.body.email })
    .then(user => {
        if(user === null) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Incorrect email.'
            })
        }
        try{
            bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
                if(result) {
                    return res.status(200).json({
                        statusCode: 200,
                        status:     true,
                        message:    'Authentication was successful',
                        token: auth.generateToken(user._id),
                    })
                }
                return res.status(401).json({
                    statusCode: 401,
                    status:     false,
                    message:    'Totes not correct bruh.'
                })
            })
        }
        catch{
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Unable to authenticate user.'
            })

        }

    })
}
