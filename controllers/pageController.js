const getIndexPage = (req, res) => {
    res.render("index")
};
const getStudentPage = (req, res) => {
    res.render("stuindex")
};
const getInstructorPage = (req, res) => {
    res.render("insindex")
};
const getSignupPage = (req, res) => {
    res.render("signup", {
        link: "signup",
    });
};
const getLoginPage = (req, res) => {
    res.render("login", {
        link: "login",
    });
};
export { getIndexPage, getStudentPage, getInstructorPage, getSignupPage, getLoginPage };