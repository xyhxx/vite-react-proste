const {log} = console;

export function reportWebVitals() {
  import('web-vitals/attribution').then(function ({
    onCLS,
    onFID,
    onFCP,
    onLCP,
    onTTFB,
    onINP,
  }) {
    // Time to First Byte
    onCLS(log);
    // First Contentful Paint
    onFID(log);
    // Largest Contentful Paint
    onFCP(log);
    // Cumulative Layout Shift
    onLCP(log);
    // First Input Delay
    onTTFB(log);
    // Interaction to Next Paint
    onINP(log);
  });
}
