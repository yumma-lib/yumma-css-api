import { AllUtilities } from "@/types";

// Regular utilities
import { borderUtils } from "@yummacss/utilities/borders";
import { boxModelUtils } from "@yummacss/utilities/box-model";
import { flexboxUtils } from "@yummacss/utilities/flexbox";
import { fxUtils } from "@yummacss/utilities/fx";
import { gridUtils } from "@yummacss/utilities/grid";
import { interactionUtils } from "@yummacss/utilities/interactions";
import { layoutUtils } from "@yummacss/utilities/layout";
import { outlineUtils } from "@yummacss/utilities/outlines";
import { tableUtils } from "@yummacss/utilities/tables";
import { typographyUtils } from "@yummacss/utilities/typography";

// Color utilities
import { accentColorUtils } from "@yummacss/colors/accent-color";
import { backgroundColorUtils } from "@yummacss/colors/background-color";
import { borderBottomColorUtils } from "@yummacss/colors/border-bottom-color";
import { borderColorUtils } from "@yummacss/colors/border-color";
import { borderLeftColorUtils } from "@yummacss/colors/border-left-color";
import { borderRightColorUtils } from "@yummacss/colors/border-right-color";
import { borderTopColorUtils } from "@yummacss/colors/border-top-color";
import { caretColorUtils } from "@yummacss/colors/caret-color";
import { colorUtils } from "@yummacss/colors/color";
import { outlineColorUtils } from "@yummacss/utilities/colors/outline-color";
import { textDecorationColorUtils } from "@yummacss/colors/text-decoration-color";

export const allUtilities: AllUtilities = [
  // Regular utilities
  ...borderUtils,
  ...boxModelUtils,
  ...flexboxUtils,
  ...fxUtils,
  ...gridUtils,
  ...interactionUtils,
  ...layoutUtils,
  ...outlineUtils,
  ...tableUtils,
  ...typographyUtils,

  // Color utilities
  ...accentColorUtils,
  ...backgroundColorUtils,
  ...borderBottomColorUtils,
  ...borderColorUtils,
  ...borderLeftColorUtils,
  ...borderRightColorUtils,
  ...borderTopColorUtils,
  ...caretColorUtils,
  ...colorUtils,
  ...outlineColorUtils,
  ...textDecorationColorUtils,
];
