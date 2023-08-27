import Lesson from "../models/LessonModel.js";

const createLesson = async (req, res) => {
    try {
        const lesson = await Lesson.create(req.body);
        res.status(201).json({
            succeded: true,
            lesson,
        });
    } catch (error) {
        res.status(500).json({
            succeded: false,
            error,
        });
    }

};

export { createLesson };
