const Section = require("../models/section");
const Subject = require("../models/subject");

const postNewSubjectInSectionId = async (req, res) => {
    const {sectionId : section} = req.params
    Subject.create({section, ...req.body})
    res.send({msg:'Subject created!'})
};

const getNewSubjectBySectionId = async (req, res) => {
    const data = await Subject.findById('678af9037cab117777ef0640')
    res.send(data)
};

const getAllSubjects = async (req, res) =>{
    const data = await Subject.find()
    res.send(data)
}
module.exports = { postNewSubjectInSectionId, getNewSubjectBySectionId, getAllSubjects };
