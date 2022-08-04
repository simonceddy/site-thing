import { useCallback } from 'react';
import { guitarParts } from '../../../features/guitarExplorer/support/partlist';

function RenderGuitarPart({ part, type, props = {} }) {
  if (guitarParts[type]
    && guitarParts[type][part]
    && guitarParts[type][part].Component
  ) {
    const C = useCallback(guitarParts[type][part].Component, [part]);
    return (<C {...props} />);
  }
  return null;
}

export default RenderGuitarPart;
