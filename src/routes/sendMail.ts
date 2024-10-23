import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { runEmail } from "../lib/nodemailer";

export async function sendMailController(req:FastifyRequest,res:FastifyReply) {
    const {subject,text,to,html} = z.object({
        text:z.string(),
        html:z.string().optional(), // html 
        to:z.string().email(), //reciever
        subject:z.string()// title
    }).parse(req.body)

    runEmail({
        html:html?html:null,subject,text,to
    })
}