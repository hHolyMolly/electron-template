import React from 'react';

type TypeUseOutsideReturn = {
  ref: React.Ref<HTMLDivElement>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function useOutside(initialActive: boolean, action?: () => void): TypeUseOutsideReturn {
  const [isActive, setIsActive] = React.useState<boolean>(initialActive);

  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsActive(false);

        if (action) action();
      }
    },
    [action]
  );

  React.useEffect(() => {
    const body = window.document.body as HTMLBodyElement;

    body.addEventListener('click', handleClickOutside, true);

    return () => {
      body.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return { ref, isActive, setIsActive };
}

export default useOutside;
