const bcrypt = require('bcrypt');

const hashPassword= async(password) => {
    try {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function(err, salt) {
                if (err) {
                    reject(err);
                } else {
                    bcrypt.hash(password, salt, function(err, hash) {
                        if (err) {
                            reject(err);
                        } else {
                            // Store hash in your password DB.
                            resolve(hash);
                        }
                    });
                }
            });
        });
    } catch (error) {
        // Handle error
        console.error("Error hashing password:", error);
        throw error;
    }
};

// Decrypt --> user jo login mae daalega aur hashed password db se aake match hoga
const comparePassword = async (password,hashedPassword) =>{
    return bcrypt.compare(password, hashedPassword);

}


module.exports={hashPassword,comparePassword};