"use strict";
const express = require("express");
const router = express.Router();

//importing the controller
const courseController = require("../controller/course");

router.post(
  "/course/setindividualcourse",
  courseController.insertIndividualCourse
);
router.get("/course/getindividualcourse", courseController.getIndividualCourse);
router.post(
  "/course/setcousecollectivedemanad",
  courseController.setcouseCollectiveDemanad
);
router.get(
  "/course/getcousecollectivedemanad",
  courseController.getcouseCollectiveDemanad
);
router.post("/course/setstagecourse", courseController.setStageCourse);
router.post(
  "/course/setstagecourseinsert",
  courseController.setStageCourseInsert
);
router.get("/course/getstagecourse", courseController.getStageCourse);
router.post(
  "/course/settournamentcourse",
  courseController.setTournamentCourse
);
router.post(
  "/course/setTournamentCourseInsert",
  courseController.setTournamentCourseInsert
);
router.post(
  "/course/setTournamentCourseUpdate",
  courseController.setTournamentCourseUpdate
);
router.get("/course/gettournament", courseController.getTournament);
router.get("/course/getstage", courseController.getStage);
router.get("/course/gettournamentcourse", courseController.getTournamentCourse);
router.post("/course/setanimationcourse", courseController.setAnimationCourse);
router.post("/course/setanimationinsert", courseController.setAnimationInsert);
router.post("/course/setanimationupdate", courseController.setAnimationUpdate);
router.get("/course/getanimationcourse", courseController.getAnimationCourse);
router.post(
  "/course/setteambuildingcourse",
  courseController.setTeambuildingCourse
);
router.get(
  "/course/getteambuildingcourse",
  courseController.getTeambuildingCourse
);
router.post(
  "/course/setcousecollectiveclub",
  courseController.setCourseCollectiveClub
);
router.post(
  "/course/deleteclubavailablity",
  courseController.deleteClubAvailablity
);
router.get(
  "/course/getcousecollectiveclub",
  courseController.getCourseCollectiveClub
);
router.get("/course/getcourseyear", courseController.getYear);

module.exports = router;
