import { NextApiRequest, NextApiResponse } from "next";
import { getCmdUrl } from "./utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  req; // unused
  const cmdUrl = getCmdUrl();
  const result = await fetch(cmdUrl, {
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
