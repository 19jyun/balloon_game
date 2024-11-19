import { useState } from "react";

export default function useOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  const openOverlay = () => setIsVisible(true);
  const closeOverlay = () => setIsVisible(false);

  return { isVisible, openOverlay, closeOverlay };
}
