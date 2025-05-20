import UserEmail from "../models/userEmail.js";

export const addUserEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const existingEmail = await UserEmail.find({ email });
    if (existingEmail.length > 0) {
      return res
        .status(200)
        .json({ success: true, message: "Email already exists" });
    }
    const newUserEmail = new UserEmail({ email });
    await newUserEmail.save();
    res
      .status(201)
      .json({ success: true, message: "Email added successfully" });
  } catch (error) {
    console.error("Error adding email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
