export interface UtilityClass {
  classSuffix: string;
  classValues: string[];
}

export interface Utility {
  classPrefix: string;
  classLink?: string;
  utilityClasses: (UtilityClass | { excludeZero: boolean })[]; 
}

export type AllUtilities = Utility[];
