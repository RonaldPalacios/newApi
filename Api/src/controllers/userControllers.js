import db from "./models/User.js";
import sendMail from '../service/mail'

let User = {
        createUser: async () => {
            try {
                console.log(req.body)
                await db.User.create(req.body);
                let subject = "Creacion de usuario";
                sendMail(req.body, subject);
                res.status(200).json({
                    status: 200,
                    message: 'Se creo el usuario correctamente',
                });
            } catch (e) {
                res.status(500).json({
                    message: 'No se pudo crear el usuario',
                    error: e,
                });
            }

        }

    }


        export default User;