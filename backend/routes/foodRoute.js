import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"      // for image storation..

const foodRouter = express.Router();   // with the help of this router we create get, post, upload ....

// for saving in upload folder.......     OR image Storage...
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{                // Here cb is a collback function..
        return cb(null,`${Date.now()}${file.originalname}`)      // we use Date.now for unique filename for each file or foodItems... & file.originalname is extension
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);




export default foodRouter;