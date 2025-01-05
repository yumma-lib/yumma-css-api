import { NextApiRequest, NextApiResponse } from "next";
import { getData } from "@/util/getData";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = getData();

  const uniqueProps = Array.from(
    new Set(data.flatMap((item: { properties: string[] }) => item.properties))
  );

  res.status(200).json(uniqueProps);
};

export default handler;
