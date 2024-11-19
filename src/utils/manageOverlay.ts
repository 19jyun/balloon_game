type OverlayStateSetter = React.Dispatch<React.SetStateAction<boolean>>;

interface OverlayHandlers {
  openFailOverlay: () => void;
  closeFailOverlay: () => void;
  openSuccessOverlay: () => void;
  closeSuccessOverlay: () => void;
}

export default function manageOverlay(
  setShowFail: OverlayStateSetter,
  setShowSuccess: OverlayStateSetter,
  resetGame: () => void
): OverlayHandlers {
  return {
    openFailOverlay: () => {
      setShowFail(true);
    },
    closeFailOverlay: () => {
      setShowFail(false);
      resetGame();
    },
    openSuccessOverlay: () => {
      setShowSuccess(true);
    },
    closeSuccessOverlay: () => {
      setShowSuccess(false);
      resetGame();
    },
  };
}
