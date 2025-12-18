//! useDebounce hook type
export declare function useDebounce<T>(value: T, delay: number): T;

//! useWindowSize hook type
type UseWindowSizePropsType = {
  delay?: number;
};

type ScreenSizeType = {
  screenWidth: number;
  screenHeight: number;
};

export declare function useWindowSize(options?: UseWindowSizePropsType): ScreenSizeType;