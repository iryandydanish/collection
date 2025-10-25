import Ably from "ably";

export default async function handler(req, res) {
  try {
    const client = new Ably.Rest({ key: process.env.ABLY_API_KEY });
    const tokenRequest = await client.auth.createTokenRequest({ clientId: "watchparty" });
    res.status(200).json(tokenRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
