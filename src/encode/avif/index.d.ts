/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} input_data
* @param {ConversionOptions} options
* @param {Function} on_progress
* @returns {ConversionResult}
*/
export function convert_to_avif(input_data: Uint8Array, options: ConversionOptions, on_progress: Function): ConversionResult;
/**
* A special function for WebP.
* @param {Uint8Array} input_data
* @param {ConversionOptions} options
* @param {number} width
* @param {number} height
* @param {Function} on_progress
* @returns {ConversionResult}
*/
export function rgba_to_avif(input_data: Uint8Array, options: ConversionOptions, width: number, height: number, on_progress: Function): ConversionResult;
/**
*/
export enum Subsampling {
  YUV420,
  YUV444,
  YUV400,
}
/**
*/
export class ConversionOptions {
  free(): void;
/**
* @param {number} effort
* @param {number} quality
* @param {number} subsampling
* @param {boolean} keep_transparency
*/
  constructor(effort: number, quality: number, subsampling: number, keep_transparency: boolean);
/**
* Effort of conversion as a percentage from 0 to 100.
*/
  effort: number;
/**
*/
  keep_transparency: boolean;
/**
* Quality of conversion as a percentage from 0 to 100.
*/
  quality: number;
/**
*/
  subsampling: number;
}
/**
*/
export class ConversionResult {
  free(): void;
/**
*/
  data: number;
/**
*/
  error: number;
/**
*/
  error_size: number;
/**
*/
  size: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_conversionresult_free: (a: number) => void;
  readonly __wbg_get_conversionresult_data: (a: number) => number;
  readonly __wbg_set_conversionresult_data: (a: number, b: number) => void;
  readonly __wbg_get_conversionresult_size: (a: number) => number;
  readonly __wbg_set_conversionresult_size: (a: number, b: number) => void;
  readonly __wbg_get_conversionresult_error: (a: number) => number;
  readonly __wbg_set_conversionresult_error: (a: number, b: number) => void;
  readonly __wbg_get_conversionresult_error_size: (a: number) => number;
  readonly __wbg_set_conversionresult_error_size: (a: number, b: number) => void;
  readonly convert_to_avif: (a: number, b: number, c: number, d: number) => number;
  readonly rgba_to_avif: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
  readonly __wbg_conversionoptions_free: (a: number) => void;
  readonly __wbg_get_conversionoptions_effort: (a: number) => number;
  readonly __wbg_set_conversionoptions_effort: (a: number, b: number) => void;
  readonly __wbg_get_conversionoptions_quality: (a: number) => number;
  readonly __wbg_set_conversionoptions_quality: (a: number, b: number) => void;
  readonly __wbg_get_conversionoptions_subsampling: (a: number) => number;
  readonly __wbg_set_conversionoptions_subsampling: (a: number, b: number) => void;
  readonly __wbg_get_conversionoptions_keep_transparency: (a: number) => number;
  readonly __wbg_set_conversionoptions_keep_transparency: (a: number, b: number) => void;
  readonly conversionoptions_new: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
