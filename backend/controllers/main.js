const getMain = (req, res) => {
  console.log("gucci")
  res.json({
    gg : "wp",
  })
}
const getPost = (req, res) => {
  console.log(req.body)
}
export { getMain, getPost }
