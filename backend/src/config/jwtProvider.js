const { Jwt } = require("jsonwebtoken");
const skey=process.env.SECRETE_KEY;


const generatejsonwebtoken=(userID)=>{
    const token= jwt.sign(
        {userID},
        {skey},
        {expiresIn:'3d'}
    )
    return token;

}
const getuserIdbyJWT=(token)=>{
  
    const verifiytoken=jwt.verify(token,skey)
    return userID;
}
module.exports={generatejsonwebtoken,getuserIdbyJWT}