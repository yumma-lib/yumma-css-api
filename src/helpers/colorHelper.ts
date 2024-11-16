import tinycolor from "tinycolor2";

const mixColors = (color1: string, color2: string, weight: number): string => {
  return tinycolor.mix(color1, color2, weight).toHexString();
};

export const generateShades = (
  baseColor: string
): { lightShades: string[]; baseColor: string; darkShades: string[] } => {
  const lightShades = Array.from({ length: 6 }, (_, i) =>
    mixColors(baseColor, "white", (6 - i) * 10)
  );

  const darkShades = Array.from({ length: 6 }, (_, i) =>
    mixColors(baseColor, "black", (i + 1) * 10)
  );

  return { lightShades, baseColor, darkShades };
};
