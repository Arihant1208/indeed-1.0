// export default async function handler(req: any, res: any) {
//   res.send({ username: "abc", password: "hey" });
// }

export async function POST(req: Request) {
  const body = await req.json();
  return new Response(JSON.stringify({ body, status: "success" }));
}
