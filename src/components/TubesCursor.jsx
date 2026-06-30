import React, { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import TubesCursorModule from 'threejs-components/build/cursors/tubes1.min.js';

export const TubesCursor = () => {
  const canvasRef = useRef(null);
  const { colors, isDark } = useTheme();

  useEffect(() => {
    let app = null;

    if (canvasRef.current && TubesCursorModule) {
      // Provide fallback colors in case the user toggles light mode
      const tubeColors = isDark 
        ? ["#f967fb", "#53bc28", "#6958d5"] 
        : ["#ff512f", "#dd2476", "#ff008a"];
        
      const lightColors = isDark
        ? ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
        : ["#11998e", "#38ef7d", "#dd2476", "#ff512f"];

      try {
        const initFn = typeof TubesCursorModule === 'function' 
          ? TubesCursorModule 
          : TubesCursorModule.default;

        if (typeof initFn === 'function') {
          app = initFn(canvasRef.current, {
            tubes: {
              colors: tubeColors,
              lights: {
                intensity: 200,
                colors: lightColors
              }
            }
          });
        } else {
          console.error("TubesCursorModule is not a function:", TubesCursorModule);
        }
      } catch (err) {
        console.error("Failed to initialize TubesCursor:", err);
      }
    }

    return () => {
      // Clean up WebGL context and event listeners
      if (app) {
        if (typeof app.dispose === 'function') {
          app.dispose();
        } else if (typeof app.destroy === 'function') {
          app.destroy();
        }
      }
    };
  }, [isDark]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen'
      }}
    >
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
    </div>
  );
};
