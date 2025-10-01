import connectDB from "@/config/database";
import Property from "@/models/Property";


//Get /api/properties/:id
export async function GET(request, { params }) {
    try {
        await connectDB();

        // ✅ Await params before accessing its properties
        const { id } = await params;

        const property = await Property.findById(id);

        if (!property) {
            return new Response('Property Not Found', { status: 404 });
        }

        return new Response(JSON.stringify(property), { status: 200 });
    } catch (error) {
        return new Response('Something went wrong', { status: 500 });
    }
};