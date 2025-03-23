import multer from "multer";

const upload = multer({dest:"uploads/"}); // will create folder
export default upload;