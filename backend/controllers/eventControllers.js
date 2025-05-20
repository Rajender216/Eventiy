import Event from "../models/event.js";
export const getAllEventsController = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events || events.length === 0) {
      return res.status(404).json({ message: "No events found" });
    }
    res.status(200).json(events);
  } catch (error) {
    // console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
