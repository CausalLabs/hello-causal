import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch("http://iserver:3004/iserver/cmd", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ action: "flushToWarehouse" }),
  });
  if (result.status != 200) {
    res.status(result.status);
    res.send(await result.text());
  } else res.status(result.status).send(await result.text());
}
