// define the mongoose schema, mongoose will create a new mongodb collection for you ("students" for this model)
// be sure to grant all required user privileges
const Student = (mongoose) => {
	const studentModel = mongoose.model(
		"student",
		mongoose.Schema(
			{
				name: String,
				age: Number
			}
		)
	)
	
	return studentModel
}

module.exports = Student