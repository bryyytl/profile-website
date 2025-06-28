import { useMediaQuery } from "@mantine/hooks";

// TODO: Convert to better utilize postcss variables
const useDetectMobileBreakpoint = (): boolean => {
  const isMobileBreakpoint = useMediaQuery("(max-width: 48em)");
  return isMobileBreakpoint ?? false;
};

export default useDetectMobileBreakpoint;
