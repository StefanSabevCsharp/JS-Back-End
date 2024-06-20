//if im getting an error from the server, i want to parse it and return the error message
//i have to parse all the errors in a single format suitable for handlebars

// function parseError(err) {
//     if (err.name === "ValidationError") {
//         return Object.values(err.errors).map(e => e.properties.message);
//     } else if (err.name === "MongoError" && err.code === 11000) {
//         return ["This email is already registered"];
//     } else {
//         return [err.message];
//     }
// }