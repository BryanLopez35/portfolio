export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  return new Response(
    `User-agent: *
Disallow: /api/
Allow: /
Sitemap: https://bryancode.dev/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain",
      },
    }
  );
}
