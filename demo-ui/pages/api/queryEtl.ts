import { NextApiRequest, NextApiResponse } from "next";
import { getETLQueryURL } from "./utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const queryId = req.query?.queryId;
  const queryUrl = `${getETLQueryURL()}/${queryId}`;

  const result = await fetch(queryUrl);
  if (result.status != 200) {
    res.status(result.status);
    res.send(await result.text());
  } else res.status(result.status).send(await result.json());
}
