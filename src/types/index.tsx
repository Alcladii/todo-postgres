import { ReactNode } from "react";

export interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
}

export interface formProps {
  children: React.ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: () => void;
}

export interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
  margin?: string;
}

export interface todoProps {
   id: any;
   title?: string | null;
   isCompleted: boolean;
   createdAt?: string;
}
