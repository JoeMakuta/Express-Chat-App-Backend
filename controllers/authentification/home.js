const homePage = (req, res) => {
  res.status(200).json({ message: "This is the Home page ..." });
};

module.exports = homePage;
