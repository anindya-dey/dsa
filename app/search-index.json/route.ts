import { buildSearchIndex } from "@/lib/search";

export const dynamic = "force-static";

export function GET(): Response {
  return Response.json(buildSearchIndex());
}
