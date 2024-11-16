import { playgroundData } from "@/index";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const completions = playgroundData();
  res.status(200).json(completions);
}
