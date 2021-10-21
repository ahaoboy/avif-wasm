import initAvif, {
  convert_to_avif,
  ConversionOptions,
  ConversionResult,
} from "./avif";
export * from "./avif";
let isLoad = false;
export const init = async () => {
  if (!isLoad) {
    await initAvif();
    isLoad = true;
  }
};
export const encode = async (
  input_data: Uint8Array,
  options: ConversionOptions,
  on_progress: Function
): Promise<ConversionResult> => {
  await init();
  return convert_to_avif(input_data, options, on_progress);
};