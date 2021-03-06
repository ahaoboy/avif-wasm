import initAvif, {
  convert_to_avif,
  ConversionOptions,
  Subsampling,
  ConversionResult,
} from './avif';
import type { InitOutput } from './avif';
export { Subsampling, ConversionOptions, InitOutput, ConversionResult };
let wasmModule: InitOutput;
export const init = async () => {
  if (!wasmModule) {
    wasmModule = await initAvif();
  }
  return wasmModule;
};
export const encode = async (
  input_data: Uint8Array,
  options: ConversionOptions,
  on_progress: (p: number) => void
): Promise<Uint8Array> => {
  const { memory } = await init();
  const result = convert_to_avif(input_data, options, on_progress);
  if (result.error_size !== 0) {
    const errorData = new Uint8Array(
      memory.buffer,
      result.error,
      result.error_size
    );
    const error = new TextDecoder().decode(errorData);
    throw new Error(error);
  }
  const data = new Uint8Array(
    memory.buffer.slice(result.data, result.data + result.size)
  );
  return data;
};
