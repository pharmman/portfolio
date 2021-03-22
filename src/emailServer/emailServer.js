const express = require('express')
const app = express()
const nodemailer = require('nodemailer');
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
async function main() {

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'aleksandrrasskazovwork@gmail.com', // generated ethereal user
            pass: 'Kavabanga2108', // generated ethereal password
        },
    });

    app.post('/sendMessage',   (req, res) => {
        const {name, email, text} = req.body

        let info =  transporter.sendMail({
            from: name,
            sender: email,// sender address
            to: 'pharm.sale777@gmail.com', // list of receivers
            subject: email, // Subject line
            text: text, // plain text body
            // html: `<b>${email}</b>`, // html body
        });
        res.send(req.body)
    })
}



app.listen(3010, () => {
    console.log(`Example app listening at http://localhost:${3010}`)
})

main().catch(console.error);


