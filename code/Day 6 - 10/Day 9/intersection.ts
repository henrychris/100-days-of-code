// ! Intersection types 2

type User = {
	name: string,
	age: number,
	email: string,
	password: string
}

type Student = User & {
	class: string,
	program: string,
	role: "student"
}

type Teacher = User & {
	qualifications: string,
	role: "teacher"
}


let student: Student = {
	name: "Henry",
	age: 20,
	class: "200",
	email: "henry@errandpay.com",
	password: "mypassword",
	program: "MIS",
	role: "student"
}
let teacher: Teacher = {
	name: "Henry",
	age: 20,
	qualifications: "Bsc",
	email: "henry@errandpay.com",
	password: "mypassword",
	role: "teacher"
}

function addUser(user: Student | Teacher) {
	if (user.role === "teacher") {
		logQualifications(user.qualifications);
	}
	else {
		user.program;
		registerClasses(user.class);
	}
}

addUser(teacher);

function logQualifications(qualifications: string) {
	throw new Error("Function not implemented.")
}
function registerClasses(classes: string) {
	throw new Error("Function not implemented.")
}

// to properly use discriminated unions, the specific types need to have the property to discriminate with.
// that is, if they implement some base type, the base type is not to have the discriminating property
