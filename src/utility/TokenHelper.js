import jwt from "jsonwebtoken";
export const EncodeToken = (email) => {
    let key = "ABC12341241234";
    let expire = "30d"; //30 * 24 * 60 * 60
    let payload = { email };
    return jwt.sign(payload, key, { expiresIn: expire });
};

export const DecodeToken = (token) => {
    try {
        let key = "ABC12341241234";
        let expire = "30d"; //30 * 24 * 60 * 60
        let decoded = jwt.verify(token, key);


        if (!!decoded.email === true) {
            let RefreshToken = jwt.sign({ email: decoded.email }, key, {
                expiresIn: expire,
            });
            return { RefreshToken, email: decoded.email };
        }
    } catch (err) {
        return null;
    }
};
