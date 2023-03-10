import {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import colors from "../../config/color";
import { StListItem } from "../../styled";
import { St } from "../../types/property";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = useCallback(() => {
    setState((prevState) => !prevState);
  }, []);

  return [state, toggle] as const;
};

interface MenuItemProps {
  children?: ReactNode;
  isActive?: boolean;
  st?: St;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export const MenuItem = (props: MenuItemProps) => {
  const isActive = props.isActive || false;
  const [st, setSt] = useState<St>(props.st || {});

  return (
    <StListItem
      st={
        isActive
          ? {
              ...st,
              color: colors.themeColor,
              backgroundColor: colors.themeColor + "1F",
              cursor: "pointer",
              transition: "color 0.5s, background-color 0.5s",
            }
          : {
              ...st,
              cursor: "pointer",
              transition: "color 0.5s, background-color 0.5s",
            }
      }
      onClick={props.onClick}
    >
      {props.children}
    </StListItem>
  );
};
