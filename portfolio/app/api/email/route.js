/*
    ****** READ THESE INSTRUCTIONS WHEN HAVING PROBPLEM LOGGIN IN TO YOUR GAMIL ACCOUNT. ******

    Here are some steps you can try to resolve this issue:

    Double-check that you are using the correct email address and password for your Gmail account. 
    Make sure there are no typos or spelling errors, and check that the account is still active 
    and in good standing.

    Verify that you have allowed "Less secure app access" for your Gmail account. 
    Go to your Google Account settings, click on "Security" in the left-hand menu, 
    and then scroll down to "Less secure app access". Make sure that this option is turned on. 
    Alternatively, you can create an OAuth2 client ID and secret for your application and use 
    those to authenticate with Google in Nodemailer.

    Check that your Gmail account is not temporarily blocked or locked due to suspicious activity.
    Try logging into your account from a web browser and see if you are prompted to verify your 
    identity or take any other actions.

*/

import nodemailer from 'nodemailer';

export async function POST(req, res) {
    
    const { email, subject, messageBody } = await req.json();

    if (! (email || subject || messageBody)) return new Response({badParams: "Bad Params Provided"})
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'ghida@gmail.com',
            pass: 'your_password',
        },
    });

    const mailOptions = {
        from: email,
        to: "ghida@gmail.com",
        subject: subject,
        text: messageBody,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response({ message: 'EmailSentSuccessfully' });
    } catch (error) {
        console.log(error);
        return new Response({ error: 'Failed to send email' });
    }
}