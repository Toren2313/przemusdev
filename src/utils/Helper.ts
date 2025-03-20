export abstract class Helper {
  /**
   * @Toren2313
   *
   * @description
   * Gradient ONLY FOR TEXT (colors in hex start: #b026ff, center: #b026ff, end: #b50094)
   */
  static readonly GRADIENT_STYLE: string =
    "bg-gradient-to-tr from-neon_violet via-pink-600 to-main_pink text-transparent bg-clip-text";

  /**
   * @Toren2313
   *
   * @description
   * Style for every section (only parent element)
   */
  static readonly SECTION_BASE_STYLE: string = "absolute h-[calc(100vh-5rem)] w-screen flex translate-y-20";
}
