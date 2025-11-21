import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "lucasfernandesmoura09@gmail.com",
            pass: "maeteamo10" // precisa ativar no Google
        }
    });

    await transporter.sendMail({
        from: email,
        to: "lucasfernandesmoura09@gmail.com",
        subject: `Nova mensagem do portfólio de ${name}`,
        text: message
    });

    res.send({ success: true });
});

app.listen(3000, () => console.log("Servidor rodando!"));