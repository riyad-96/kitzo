export function tooltip(
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
     * Inline styles to apply (excluding top, left, right, bottom, position, zIndex, opacity, transform, translate, scale, rotate, perspective)
     */
    style?: Partial<CSSStyleDeclaration>;
  }
): void;

export function ripple(
  element: string | Element | NodeListOf<Element>,
  config?: {
    /**
     * Ripple opacity (0 to 1). Default: 0.5
     */
    opacity?: number;
    /**
     * Animation duration in seconds ('s'). Default: 1
     */
    duration?: number;
    /**
     * Ripple color (CSS color). Default: 'white'
     */
    color?: string;
    /**
     * Ripple size in pixels ('px'). If null, auto-scales based on button size. Default: null
     */
    size?: number | null;
  }
): void;

export function copy(
  element: string | Element | NodeListOf<Element>,
  config: {
    /**
     * The text to be copied to the clipboard.
     * Must be a non-empty string.
     */
    doc?: string;

    /**
     * The DOM event that triggers the copy action.
     * Only the following events are allowed:
     * - 'click' (default)
     * - 'dblclick'
     * - 'contextmenu'
     * - 'mouseup'
     * - 'touchend'
     */
    event?: 'click' | 'dblclick' | 'contextmenu' | 'mouseup' | 'touchend';
  }
): void;

export function debounce<Args extends any[]>(fn: (...args: Args) => any, delay?: number): (...args: Args) => void;

export function clippath(
  element: string | Element | NodeListOf<Element>,
  config?: {
    text?: String;
    clippathSize?: String | Number;
    smooth?: Boolean;
    style?: Partial<CSSStyleDeclaration>;
  }
): void;
