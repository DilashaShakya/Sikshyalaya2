const Class = require("../models/class");
const Section = require("../models/section");

const addNewClass = async (req, res) => {
    const classExists = await Class.exists({academicYear: req.body.academicYear,gradeLevel: req.body.gradeLevel})
    if(classExists) return res.status(409).send({msg: 'Class already exist for the acedemic year'})
    Class.create(req.body)
    res.send({msg: 'class  has been created'})
  };

const getAllClass = async (req, res) => {
  const data = await  Class.find()
  res.send(data)
};

  
const getSectionsByClassId = async (req, res) => {
  if (!req.params.classId) {
      return res.status(400).send({ error: "classId parameter is required" });
  }
  try {
      const data = await Section.find({ class: req.params.classId }).populate("subjects");
      res.send(data);
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
};

const postNewSectionInClassId = async (req, res) => {
  Section.create({...req.body, class: req.params.classId})
  res.send({msg: 'Section created successfully!'})
};


const deleteSectionById = async (req, res) => {
  const data =  await Section.findByIdAndDelete(req.params.sectionId)
  if(data) res.send('Section Deleted successfully!')
};
  

  

 const getSectionById = async (req, res) => {
  const data =  await Section.findById(req.params.sectionId).populate('classTeacher')
  if(data) res.send(data)
 };
    
module.exports = {addNewClass,getAllClass,getSectionById,deleteSectionById,getSectionsByClassId,postNewSectionInClassId }; 
  