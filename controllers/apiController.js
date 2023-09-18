module.exports = {
    landingPage: (req, res) => {
        const message = "Halo API"
        res.status(200).json({message})
    }
}