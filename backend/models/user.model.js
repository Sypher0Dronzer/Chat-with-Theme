import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },  
  password: {
    type: String,
    required: true,
    minlength:6
  },
  profilePic: {
    type: String,
    default: '', 
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  }
}, { 
  timestamps: true,  
});

const User = mongoose.model('User', userSchema);

export default User;
