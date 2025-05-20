import axios from "axios";
import * as cheerio from "cheerio";
import Event from "../models/event.js";

const fetchEventsAndSaveToDB = async (req, res) => {
  try {
    const response = await axios.get(process.env.URL);
    const html = response.data;
    const $ = cheerio.load(html);
    const events = [];

    $(".Container_root__4i85v").each((i, el) => {
      const title = $(el).find(".event-card-link h3").text().trim();

      const paragraphs = $(el).find(".event-card-details p");

      const date = paragraphs.eq(1).text().trim();
      const location = paragraphs.eq(2).text().trim();

      const price = $(el).find("[class*=priceWrapper] p").text().trim();
      const finalPrice = price === "" ? "Free" : price;

      const originalUrl = $(el).find(".event-card-link").attr("href") || "";

      const imageUrl = $(el).find("img.event-card-image").attr("src") || "";

      events.push({
        title,
        date,
        location,
        description: finalPrice,
        originalUrl,
        source: "Eventbrite",
        imageUrl,
      });
    });
    const uniqueEvents = Array.from(
      new Map(events.map((item) => [item.title, item])).values()
    );
    Event.insertMany(uniqueEvents);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchEventsAndSaveToDB;
