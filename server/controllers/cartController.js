import userModel from "../models/userModel.js"


// add items to user Card
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id: req.body.userId})
        let cartData = userData.cardData;
        
    } catch (error) {
        
    }
}
const removeFromCart = async (req, res) => {

}

//fet User Data 
const getCart = async (req, res) => {

}

export { addToCart, removeFromCart, getCart }