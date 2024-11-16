import { allUtilities } from "@yummacss";
import { UtilityClass } from "@/types";

function isUtilityClass(u: any): u is UtilityClass {
  return "classSuffix" in u && "classValues" in u;
}

export function playgroundData() {
  return allUtilities.flatMap((util) =>
    util.utilityClasses.filter(isUtilityClass).map((u) => ({
      label: `${util.classPrefix}${u.classSuffix}`,
      type: "keyword",
      info: u.classValues.join(" "),
    }))
  );
}

export function intellisenseData() {
  return allUtilities.flatMap((util) =>
    util.utilityClasses.filter(isUtilityClass).map((u) => ({
      classLink: `${util.classLink}`,
      className: `${util.classPrefix}${u.classSuffix}`,
      properties: u.classValues,
    }))
  );
}

export function documentationData() {
  return allUtilities.flatMap((util) =>
    util.utilityClasses.filter(isUtilityClass).map((u) => ({
      className: `${util.classPrefix}${u.classSuffix}`,
      properties: u.classValues,
    }))
  );
}
