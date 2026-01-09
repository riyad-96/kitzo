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

export declare function useWindowSize(
  options?: UseWindowSizePropsType,
): ScreenSizeType;

//! useCopy hook type
type Status = 'standby' | 'copying' | 'copied' | 'error';

type UseCopyOptions = {
  resetDelay?: number;
};

type UseCopy<T> = {
  copy: (doc: T) => Promise<void>;
  status: Status;
  error: unknown;
  isCopying: boolean;
  isCopied: boolean;
  isError: boolean;
};

export declare function useCopy<T>(options?: UseCopyOptions): UseCopy<T>;
