import { generateShades } from "@/helpers/colorHelper";

export const baseColors = [
  { colorName: "red", colorCode: "#d73d3d" },
  { colorName: "orange", colorCode: "#e06814" },
  { colorName: "yellow", colorCode: "#d3a107" },
  { colorName: "green", colorCode: "#1fb155" },
  { colorName: "teal", colorCode: "#12a695" },
  { colorName: "cyan", colorCode: "#05a4bf" },
  { colorName: "blue", colorCode: "#3575dd" },
  { colorName: "indigo", colorCode: "#595cd9" },
  { colorName: "violet", colorCode: "#7d53dd" },
  { colorName: "pink", colorCode: "#d4418a" },
  { colorName: "silver", colorCode: "#bfc2c7" },
  { colorName: "gray", colorCode: "#606773" },
  { colorName: "lead", colorCode: "#3f3f4e" },
  { colorName: "white", colorCode: "#ffffff" },
  { colorName: "black", colorCode: "#000000" },
  { colorName: "transparent", colorCode: "transparent" },
];

export const generateColorClasses = (cssProperty: string) => {
  return baseColors.flatMap((color) => {
    if (["black", "white", "transparent"].includes(color.colorName)) {
      return [
        {
          classSuffix: `${color.colorName}`,
          classValues: [`${cssProperty}: ${color.colorCode};`],
        },
      ];
    }

    const { lightShades, baseColor, darkShades } = generateShades(
      color.colorCode
    );

    return [
      ...lightShades.map((shade, index) => ({
        classSuffix: `l-${color.colorName}-${6 - index}`,
        classValues: [`${cssProperty}: ${shade};`],
      })),
      {
        classSuffix: `${color.colorName}`,
        classValues: [`${cssProperty}: ${baseColor};`],
      },
      ...darkShades.map((shade, index) => ({
        classSuffix: `d-${color.colorName}-${index + 1}`,
        classValues: [`${cssProperty}: ${shade};`],
      })),
    ];
  });
};

// prettier-ignore

export const accentColorClasses = generateColorClasses("accent-color");
export const backgroundColorClasses = generateColorClasses("background-color");
export const borderColorClasses = generateColorClasses("border-color");
export const borderBottomColorClasses = generateColorClasses("border-bottom-color");
export const borderLeftColorClasses = generateColorClasses("border-left-color");
export const borderRightColorClasses = generateColorClasses("border-right-color");
export const borderTopColorClasses = generateColorClasses("border-top-color");
export const caretColorClasses = generateColorClasses("caret-color");
export const colorClasses = generateColorClasses("color");
export const outlineColorClasses = generateColorClasses("outline-color");
export const textDecorationColorClasses = generateColorClasses("text-decoration-color");