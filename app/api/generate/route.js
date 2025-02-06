import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Url from "@/models/Url";

export async function POST(req) {
    try {
        await connectDB(); // Ensure DB connection
        const { url, shorturl } = await req.json();

        // Check if the short URL already exists
        const existingUrl = await Url.findOne({ shorturl });
        if (existingUrl) {
            return NextResponse.json({ 
                success: false, 
                message: "Short URL already exists" }, 
                { status: 400 });
        }

        // Create and save the new short URL
        const newUrl = new Url({ url, shorturl });
        await newUrl.save();

        return NextResponse.json({
            success: true,
            message: "URL Generated Successfully",
            data: newUrl,
        }, { status: 201 });

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Server Error",
            error: error.message,
        }, { status: 500 });
    }
}
