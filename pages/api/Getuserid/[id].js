import { connecTMongodb } from "@/lib/Connactmongodb";
import user from "@/app/Modals/Usermodal";

export default async function handler(req , res){
    const {id:userId} = req.query
    console.log(userId);
await  connecTMongodb();
try{
    const finduser = await user.findById(userId);
    if(!finduser){
        return res.status(404).json({massage:"user not found"})
    }
    res.status(200).json(finduser)
} catch(err){
    res.status(500).json({massage:'Server error'})
}

}