import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        default: "User",
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        sparse: true,
        lowercase: true,
        trim: true,
    },
    phone:{
        type: String,
        unique: true,
        sparse: true,
    },
    profileImage:{
        type: String,
        default: "",
    },
    role:{
        type: String,
        enum: ["user", "venueOwner", "admin"],
        default: "user",
    },
    authProvider:{
        type: String,
        enum: ["google", "phone"],
        required: true,
    },
    googleId:{
        type: String,
        unique:true,
        sparse:true,
    },
    isVerified:{
        type: Boolean,
        default:false,
    },
    isBlocked:{
        type: Boolean,
        default:false,
    },
},{timestamps: true});

userSchema.index({ email: 1 });
userSchema.index({ phone: 1 });

const User = mongoose.model('User', userSchema);

export default User;