/* eslint no-bitwise:0 */
export default fname => fname.slice(((fname.lastIndexOf('.') - 1) >>> 0) + 2);
