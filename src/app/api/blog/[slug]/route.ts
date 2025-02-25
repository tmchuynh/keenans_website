import {NextRequest, NextResponse} from "next/server";
impost {blogPosts} from "@/lib/blogposts";

export async function GET(request: NextRequest):Promise<NextResponse> {
  const url = new URL(request.url);
  const segments = url.pathname.split("/").filter(Boolean);

const blogURL = segments[segments.length - 1];

const blog = blogPosts.find((item) => item.slug === blogURL);

if (!blog) {
  return NextResponse.json(
    { error: "Blog post not found"},
    {status: 404}
    );
}

return NextResponse.json(blog);
}
