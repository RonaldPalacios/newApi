import transports from "nodemailer";


    transports = createTransport ({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: TtestAccount.user,
        pass: testAccount.pass,
    },

});

