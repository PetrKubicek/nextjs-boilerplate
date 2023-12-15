import tunnelRat from 'tunnel-rat'

/**
 * Having both HTML and Three.js in the application requires separate renderers:
 * the DOM renderer for HTML and the React Three Fiber renderer for Three.js content.
 * This typically results in having two distinct rendering trees for each renderer.
 *
 * The tunnel is used to reduce the complexity of managing these separate rendering trees.
 * by portaling React Three Fiber content from the DOM (HTML renderer) to the Canvas
 * managed by React Three Fiber, effectively allowing a single, unified rendering tree.
 *
 * @link https://github.com/pmndrs/tunnel-rat
 */
export const tunnel = tunnelRat()
