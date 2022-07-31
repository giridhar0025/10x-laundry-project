const userModel = require("../models/userModel.js")
const express = require("express")
const {checkExistingUser, generatePasswordHash} = require("../utility");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router()


router.post("/register", async (req, res) => {
    // console.log(req.body)
    if (await checkExistingUser(req.body.email)) {
        res.status(400).send("Useremail exist. Please try with different email");
    } else {
        generatePasswordHash(req.body.password).then((passwordHash) => {
            userModel.create({
                name: req.body.name,
                email: req.body.email,
                password: passwordHash,
                phone: req.body.phone,
                district: req.body.district,
                pincode: req.body.pincode,
                address: req.body.address,
                state: req.body.state
            }).then(() => {
                    res.status(200).send(`${req.body.email} added successfully`);
                }).catch((err) => {
                    res.status(400).send(err.message)
                })
        });
    }

});

router.post("/login", (req, res)=> {
    userModel.find({email: req.body.user}).then((userData)=> {
        if(userData.length) {
            bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                if(val) {
                    const authToken = jwt.sign(userData[0].email, process.env.SECRET_KEY);
                    res.status(200).send({authToken});
                } else {
                    res.status(400).send("Invalid Password");
                }
            })
        } else {
           userModel.find({phone:req.body.user}).then((userData)=> {
            if(userData.length) {
                bcrypt.compare(req.body.password, userData[0].password).then((val)=> {
                    if(val) {
                        const authToken = jwt.sign(userData[0].email, process.env.SECRET_KEY);
                        res.status(200).send({authToken});
                    } else {
                        res.status(400).send("Invalid Password");
                    }
                })
            } else {
               res.status(200).send("No user with given Details")
            }
        })
        }
    })
});



module.exports = router