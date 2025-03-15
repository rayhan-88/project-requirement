export const EmailSend = (EmailTo,EmailText,EmailSubject)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        auth:{
            user: "rayhan88224472@gmail.com",
            pass: "ynkachvvldifspwy",
        }
    })
    const MailOptions = {
        from: EMAIL_USER,
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText,
    }
    try{
        let result = transporter.sendMail(MailOptions);
        return {status:"Email send success", result:result}
    }catch(err){
        return {status:'error',error:err.toString()};
    }
}