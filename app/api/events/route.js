// pages/api/events.js
import connectMongoDB from "@/libs/mongodb.mjs"; // Ensure you have this utility to connect to MongoDB
import Event from "@/models/eventSchema"; // Ensure the Event model/schema is correctly imported
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


export async function POST(request) {
  try {
    // Extract data from the request body
    const { title, description, date, formattedDay, formattedTime, userEmail, year, month } = await request.json();

    // Check if all required fields are provided
    if (!title || !description || !date || !formattedDay || !formattedTime || !userEmail || !year || !month) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new event document using the Event model/schema
    const event = new Event({
      title,
      description,
      date: new Date(date), // Ensure date includes time
      formattedDay,
      formattedTime,
      userEmail,
      year,
      month,
    });

    // Save the event to the database
    await event.save();

    // Return a success response
    return NextResponse.json({ message: "Event Created", event }, { status: 201 });
  } catch (error) {
    // Handle errors
    console.error("Error creating event:", error.message);
    return NextResponse.json({ error: "Error creating event" }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await connectMongoDB();
    const events = await Event.find({});

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    console.error("Error fetching events:", error.message);
    return NextResponse.error({ message: error.message });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    await connectMongoDB();

    const result = await Event.findByIdAndDelete(id);

    if (!result) {
      console.log(`Event not found with ID: ${id}`);
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    console.log(`Event deleted with ID: ${id}`);
    return NextResponse.json({ message: "Event deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting event:", error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


