import { redirect } from "next/navigation";
import connectDB from "@/lib/mongodb";
import Url from "@/models/Url";

export default async function Page({ params }) {
    await connectDB(); // Ensure DB connection

    // Await the params object
    const { shorturl } = await params; // Await the params object

    const doc = await Url.findOne({ shorturl });

    if (doc) {
        redirect(doc.url); // Redirect to the actual URL
    } else {
        redirect(`${process.env.NEXT_PUBLIC_HOST}`); // Redirect to homepage if not found
    }

    return null; // Prevent React from rendering anything
}
