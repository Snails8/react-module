import { useState } from 'react';

/**
 * 強制レンダリングを起こす際に使用するhooks
 * usage: forceUpdate(v => !v);
 * @returns
 */
export const useForceUpdate = () => {
  return useState(false)[1];
};
