const { User } = require('./user');
// const fs = require('fs');
// const path = require('path');

exports.openApis = async (req,res) => {
    try{
        // const token = req.headers.authorization.split(' ')[1];
        // console.log(req.ip);
        // let file = await fs.readFileSync('./pic/pic.jpeg');
        // res.download(file);
        // res.sendFile(path.resolve(__filename, './pic/pic.jpeg'));
        res.status(200).json({ secret: "Devdutt" });
        // next();
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ err: "Error" });
    }
}

exports.authApis = async (req,res, next) => {
    try{
        console.log("AUTH");
        const token = req.headers.authorization.split(' ')[1];

        if( token === "Devdutt" ){
            // return res.status(401).json({ message: "Nice" });
            req.user = "devdutt";
            console.log("auth: ", req.user)
            return next();
        }else{
            return res.status(200).json({ secret: "Not Matched" });
        }
    }
    catch(err){
        return res.status(500).json({ err: "Error In Auth" });
    }
}

exports.loadUser = async (req,res, next) => {
    try{
        console.log('LOAD');
        if( req.user === 'devdutt' ){
            // let user = await User.findOne({ lastName: "chudasama" }).lean();
            // if( !user ){
            //     return res.status(401).json({ messgae: "Token Malformed" });
            // }
            req.user = "devdutt";
            console.log("loaded: ", req.user);
            next();
        }
    }
    catch(err){
        return res.status(500).json({ err: "Error In Auth" });
    }
}

exports.setFields = async (req,res) => {
    try{
        const { firstName, lastName, age } = req.body;
        console.log("setFields:", req.user);

        let user = await User.create({ firstName, lastName, age });

        return res.status(201).json({ user: user });
    }
    catch(err){
        return res.status(500).json({ err: "Error" });
    }
}

exports.getRecord = async (req,res) => {
    try{
        console.log("getRecord: ", req.params);
        console.log(req.method);

        // let user;
        // if( req.params.lastName ){
        //     return res.status(200).json({ user: req.user });
        // }
        // let user = await User.find({}).lean();
        let user = req.user;
        // user.firstName = "Aasim";
        // await user.save();

        return res.status(300).json({ user: user });
    }
    catch(err){
        console.log(err);
        return res.status(500).json({ err: "Error" });
    }
}