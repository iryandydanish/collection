export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const result = await fetch("https://api.torbox.app/v1/api/torrents/createtorrent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TORBOX_API_KEY}`,
      },
      body: JSON.stringify(await req.json()),
    });

    const data = await result.json();
    res.status(result.ok ? 200 : 400).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
