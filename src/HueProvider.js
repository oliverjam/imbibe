import React, { createContext, useState } from 'react';

export const HueContext = createContext();

export function HueProvider({ children }) {
  const [hue, setHue] = useState('200');
  const value = { hue, setHue };
  return <HueContext.Provider value={value}>{children}</HueContext.Provider>;
}
