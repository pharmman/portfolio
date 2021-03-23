const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
async function main() {

    let login = process.env.LOGIN
    let password = process.env.PASSWORD

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: login, // generated ethereal user
            pass: password, // generated ethereal password
        },
    });

    app.post('/sendMessage',   (req, res) => {
        const {name, email, text} = req.body

        let info =  transporter.sendMail({
            from: name,
            sender: email && name,// sender address
            to: 'pharm.sale777@gmail.com', // list of receivers
            subject: email, // Subject line
            text: text, // plain text body
            // html: `<b>${email}</b>`, // html body
        });
        res.send(req.body)
    })
}

let port = process.env.PORT || 3010


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

main().catch(console.error);


