import fs from "fs";
import path from "path";

export const getData = () => {
  const jsonPath = path.resolve("public", "yummacss.json");
  const data = fs.readFileSync(jsonPath, "utf-8");
  return JSON.parse(data);
};
