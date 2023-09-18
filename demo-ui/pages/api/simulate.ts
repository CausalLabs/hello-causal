import { NextApiRequest, NextApiResponse } from "next";
import { SimulateRequest } from "../../types/simulate";
import { getCmdUrl } from "./utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cmdUrl = getCmdUrl();
  console.log("cmdUrl", cmdUrl);
  const simReq: SimulateRequest = req.body;
  const result = await fetch(cmdUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(simReq),
  });
  if (result.status != 200) {
    res.status(result.status);
    res.send(await result.text());
  } else res.status(result.status).send(await result.text());
}
