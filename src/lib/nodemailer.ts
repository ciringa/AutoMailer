import nodemailer from "nodemailer"
import {SOURCE_EMAIL,SOURCE_PASS} from "../lib/env/index"

interface MailConf{
  text:string, // text content
  html:string|null, // html 
  to:string, //reciever
  subject:string// title
}

const mail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: SOURCE_EMAIL,
      pass: SOURCE_PASS,
    },
    tls:{
      rejectUnauthorized:false
    }
})

export const runEmail = async (Content:MailConf)=>{
  const {html,subject,text,to} = Content;
  const ps = await mail.sendMail({
    from:SOURCE_EMAIL,text,to,subject
  })

  return ps;
}