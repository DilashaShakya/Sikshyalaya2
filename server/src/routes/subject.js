const express = require("express");
const {getNewSubjectBySectionId, postNewSubjectInSectionId, getAllSubjects} = require("../controller/subject")
const router = express.Router();

router.post("/sections/:sectionId/subjects", postNewSubjectInSectionId);

router.get("/sections/:sectionId/subjects", getNewSubjectBySectionId);

router.get('/subjects', getAllSubjects)

module.exports = router;