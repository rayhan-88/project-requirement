import bcrypt from "bcrypt";
import {EncodeToken} from "../utility/TokenHelper.js";
import { IsEmpty } from "../../client/src/utility/ValidationHelper.js";
import db from "../db/connectionDB.js";

export const signupService = async (req) => {
    try {
        let { username, email, password } = req.body;
        // Check for empty fields
        if (IsEmpty(username)) return { status: false, message: "Please enter username" };
        if (IsEmpty(email)) return { status: false, message: "Please enter email" };
        if (IsEmpty(password)) return { status: false, message: "Please enter password" };

        // Hash the password AFTER validation
        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db.execute(
            "INSERT INTO users(username,email,password) VALUES (?,?,?)",
            [username, email, hashedPassword]
        );
        // console.log(result);

        return { status: true, message: "Signup successful", user: result };

    } catch (error) {
        return { status: false, message: error.toString() };
    }
};



export const signInService = async (req, res) => {
    try {
        const reqBody = req.body;
        // Empty check reqBody
        if (IsEmpty(reqBody.email)) return { status: false, message: "Please enter email" };
        if (IsEmpty(reqBody.password)) return { status: false, message: "Please enter password" };

        // Find user by email
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE email=?;",
            [reqBody.email]
        );
        if (IsEmpty(rows)) return { status: false, msg: "User not found." };

        const exitingUser = rows[0];

        // password exists DB
        if (!exitingUser.password) return { status: false, msg: "Password not found in System" };

        // Compare passwords
        const matchPassword = await bcrypt.compare(reqBody.password, exitingUser.password);
        if (!matchPassword) return { status: false, msg: "Wrong Password" };

        // Generate token
        const token = EncodeToken(exitingUser.email);

        // Set cookie
        let options = {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
            httpOnly: false,
            sameSite: "none",
            secure: true,
            path: "/",
        };
        res.cookie("token", token, options);
        return { status: true, token: token, msg: "Login success." };
    } catch (error) {
        return { status: false, message: error.toString() };
    }
};


export const logoutService = async (req,res) => {
    try {
        res.clearCookie("token");
        return { status: true, msg: "Logout success." };
    }catch (error) {
        return {status: false, message: error.toString()}
    }
}