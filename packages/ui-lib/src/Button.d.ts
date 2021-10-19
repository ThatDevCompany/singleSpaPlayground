/// <reference types="react" />
export interface ButtonProps {
    onClick: (...args: any[]) => void;
    label: string;
}
export declare function Button(props: ButtonProps): JSX.Element;
export default Button;
