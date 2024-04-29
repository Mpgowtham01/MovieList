import { Router } from "express";
const router = Router();

import {
  createField,
  getAllMoviefields,
  getOneMovie,
} from "../controller/MovieController.js";

router.route("/createmovie").post(createField);
router.route("/getall").get(getAllMoviefields);
router.route("/getone").get(getOneMovie);

export default router;
