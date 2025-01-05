import { NextApiRequest, NextApiResponse } from "next";
import { getData } from "@/util/getData";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { classLink } = req.query;

  if (!classLink || typeof classLink !== "string") {
    return res.status(400).json({ error: "Please specify a utility class" });
  }

  const data = getData();

  const classData = data.filter(
    (item: { classLink: string }) => item.classLink === classLink
  );

  if (classData.length === 0) {
    return res
      .status(404)
      .json({ error: `The '${classLink}' utility was not found` });
  }

  res.status(200).json(classData);
};

export default handler;
