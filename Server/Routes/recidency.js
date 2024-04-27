import express from "express"
import { booking, createrecidency, getAll, getAllBooking, getAllOwnRecidencies, getDetails, getImg, getProperty, removeBooking } from "../Controller/recidencyController.js"
import multer from 'multer';
const router=express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname);
    },
  });

  const upload = multer({ storage: storage });

router.post('/createrecidency',upload.single('image'),createrecidency)
router.post('/booking',booking)
router.post('/removebooking/:id',removeBooking)
router.post('/getallbookings',getAllBooking)
router.get('/getall',getAll)
router.post('/getallownrecidencies',getAllOwnRecidencies)
router.post('/getProperty',getProperty)
router.post('/getrecidencyimg',getImg)
router.post('/getrecdetails',getDetails)


export {router as residencyRouter}