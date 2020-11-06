import connectDB from '../../utils/connectDB.js';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const db = await connectDB();
    const { method } = req;

    const user = {
        email: 'demojevu@gmail.com',
        password: 'fromsouth'
    };

    switch (method) {
        case "POST":
            const { email, password } = req.body;

            try {
                if (user.email !== email) {
                    return res.json({
                        status: "fail",
                        message: "Invalid login email"
                    })
                }

                if (user.password !== password) {
                    return res.json({
                        status: "fail",
                        message: "Invalid login password"
                    })
                }

                const token = jwt.sign({ user: 'demojevu@gmail.com' }, process.env.JWT_SECRET);

                res.json({
                    status: "success",
                    data: token
                })
            } catch (error) {
                res.status(400).json({
                    status: 'error',
                    message: error.message
                })
            }
            break;  
        
        default:
            res.status(400).json({
                status: 'error',
                message: "Invalid request method."
            })
    }
}