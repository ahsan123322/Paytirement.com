import user from "@/app/Modals/Usermodal";
import { connecTMongodb } from "@/lib/Connactmongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send({ msg: "only post request are allowed" });
    }

    const { name, lastname, Email } = req.body;

    try {
        await connecTMongodb();

        

        const newUser = await user.create({ name, lastname, Email });

        console.log(newUser);

        return res.status(201).json({ userId: newUser._id });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ err, msg: 'something is wrong' });
    }
}
