const express = require("express");
const { authApis, loadUser, setFields, getRecord } = require("./api");
const { User } = require("./user");
const router = express.Router();

router.use('/', [authApis, loadUser]);

router.param('lastName', async ( req,res,next,value ) => {
    console.log("PARAM");
    console.log(value);
    let user = await User.findOne({ lastName: value });
    if( !user ){
        // return res.status(200).json({ messgae: "No user with that lastName yet" });
        console.log("what");
        next("Any");
    }
    req.user = user;
    next();
})

router.post('/setFields', setFields);
router.get('/getRecords/:lastName', getRecord);

module.exports = router;