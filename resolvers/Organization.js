const User = require("../models/User");
const Organization = {
  creator: async (parent, args, context, info) => {
    const user = await User.findById(parent.creator._id);
    if (!user) throw new Error("Creator not found");
    return user;
  },
  admins: async (parent, args, context, info) => {
    const admins = await User.find({
      _id: {
        $in: [...parent.admins],
      },
    });
    return admins;
  },
  members: async (parent, args, context, info) => {
    const members = await User.find({
      _id: {
        $in: [...parent.members],
      },
    });
    return members;
  },
};

module.exports = Organization;