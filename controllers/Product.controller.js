const UserModel=require('../models/User.model')
const ProductModel=require('../models/ProductData.model')
const Order=require('../models/Order.model')
const { uploadMediaToCloudinary } = require("../utils/mediaUploader"); 
const CategoryModel = require('../models/Category.model');


exports.addProduct=async(req,res)=>{
    try{
        const {name,price,quantity,description,location,categoryId}=req.body
        if(!name||!price||!quantity||!description||!location||!categoryId){
            return res.status(404).json({
                success: false,
                message: "All Fields Are Required, Please Provide All The Details",
            })
        }
        const {id} = req.user;
        if(!id){
            return res.status(404).json({
                success: false,
                message: "User not authorised to fill the details"
            })
        }
        const productPhoto=req.files.productPhoto;
        if(!productPhoto) 
            return res.status(404).json({
                success:false,
                message: "Product photo not provided"
            })

        const categoryDetails = await CategoryModel.findById(categoryId);
        if(!categoryDetails) 
            return res.status(404).json({
                success: false,
                message: "Category not found"
            })

        const productImage = await uploadMediaToCloudinary(productPhoto,process.env.FOLDER_NAME);
        
        const user=await UserModel.findById(id);
        const product=await ProductModel.create({
            name,
            price,
            quantity,
            image: productImage.secure_url,
            description,
            manufacturer: user._id,
            location,
            category: categoryDetails._id
        });

        await UserModel.findByIdAndUpdate(
            {_id: user._id},
            {
                $push: {
                    products: product._id
                }
            },
            {new: true}
        )

        res.status(201).json({
            success:true,
            message:"Product Added Successfully",
            data: product
        })
    }catch(error){
        console.error("Error in addProduct:",error)
        return res.status(500).json({
            success:false,
            message:"An Error Occurred While Adding Product",
            error:error.message
        })
    }
}

exports.getProducts = async(req,res)=>{
    try {
        let products = await ProductModel.find({},{
            name: true,
            quantity: true,
            price: true,
            image: true,
            description: true,
            location: true,
            category: true
        })

        for(let i=0;i<products.length;i++){
            const categoryDetails = await CategoryModel.findById(products[i].category);
            if(!categoryDetails) 
                return res.status(404).json({
                    success: false,
                    message: "Category Not Found"
                })
            products[i].category=categoryDetails;
        }

        return res.status(200).json({
            success: true,
            message: "Products Found",
            products
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An Error Occured while getting products",
            error: error.message
        })
    }
}