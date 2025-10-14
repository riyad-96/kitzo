// Tooltip
export type tooltip = (
  element: string | Element | NodeListOf<Element>,
  config?: {
    /**
     * The tooltip text to display (default: "Tool tip")
     */
    tooltip?: string;

    /**
     * Direction where tooltip appears: 'top', 'right', 'bottom', or 'left' (default: 'bottom')
     */
    direction?: 'top' | 'right' | 'bottom' | 'left';

    /**
     * Show an arrow pointing to the target ('on' or 'off', default: 'off')
     */
    arrow?: 'on' | 'off';

    /**
     * Distance in pixels between the tooltip and the target element (default: 10)
     */
    offset?: number;

    /**
     * Optional custom class to add to the tooltip (for styling)
     */
    customClass?: string;

    /**
     * Inline styles to apply (excluding positioning/z-index/transform stuff)
     */
    style?: Partial<CSSStyleDeclaration>;
  }
) => void;

// Ripple
export type ripple = (
  element: string | Element | NodeListOf<Element>,
  config?: {
    /** Ripple opacity (0 to 1). Default: 0.5 */
    opacity?: number;

    /** Animation duration in seconds. Default: 1 */
    duration?: number;

    /** Ripple color (CSS color). Default: 'white' */
    color?: string;

    /** Ripple size in pixels. If null, auto-scales. Default: null */
    size?: number | null;
  }
) => void;

// Copy
export type copy = (doc?: any) => void;

// Debounce
export type debounce = <Args extends any[]>(fn: (...args: Args) => any, delay?: number) => (...args: Args) => void;

// Clippath
export type clippath = (
  element: string | Element | NodeListOf<Element>,
  config?: {
    /** Optional text inside the clippath element */
    text?: string;

    /** Size of the clippath circle (px or %). Default: '20%' */
    clippathSize?: string | number;

    /** Enable smooth transition (default: true) */
    smooth?: boolean;

    /** Custom inline styles */
    style?: Partial<CSSStyleDeclaration>;
  }
) => void;

// Kitzo Bundle
export interface Kitzo {
  tooltip: tooltip;
  ripple: ripple;
  copy: copy;
  debounce: debounce;
  clippath: clippath;
}

declare const kitzo: Kitzo;
export default kitzo;
