import userModel from "../models/userModel.js"


// add items to user Card
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findOne({_id: req.body.userId})
        let cartData = userData.cardData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        }
        else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId , {cartData});
        res.json({success: true, message:"Added To Cart"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}
const removeFromCart = async (req, res) => {

}

//fet User Data 
const getCart = async (req, res) => {

}

export { addToCart, removeFromCart, getCart }