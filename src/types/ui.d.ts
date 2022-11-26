namespace UiType {
  type NavigationOptions = {
    title?: string;
    color?: string;
    left?: {
      element: string | React.ReactNode;
      onClick: () => void;
    };
    right?: {
      element: string | React.ReactNode;
      onClick: () => void;
    };
  };
}
