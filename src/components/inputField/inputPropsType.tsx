export type inputPropsType = {
  className: string;
  type: string;
  placeholder: string;
  value?: string;
  onClick?: React.MouseEventHandler;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};