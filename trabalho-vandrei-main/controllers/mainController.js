exports.main = (req, res) => {
    res.render('index')
}

exports.sobre = (req, res) => {
    
    const id = req.params.id
    
    res.render("sobre", { id })
}