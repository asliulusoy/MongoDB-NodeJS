import mongoose from 'mongoose';

const { Schema } = mongoose;

const lessonSchema = new Schema({
    lesson_name: {
        type: String,
        required: true,
        trim: true
    },
    lesson_description: {
        type: String,
        required: true,
        trim: true
    },
    lesson_date: {
        type: Date,
        default: Date.now
    }
});

const Lesson = mongoose.model("Lesson", lessonSchema);

export default Lesson;