import { FastifyInstance } from "fastify";
import { sendMailController } from "./routes/sendMail";

export async function router(app:FastifyInstance) {
    //run emails
    app.route({url:"/email/send",method:"PATCH",handler:sendMailController})
}