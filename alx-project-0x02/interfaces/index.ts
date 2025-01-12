export interface CardProps{
    title: string;
    content: string;
}
export interface ButtonProps{
    label: string;
    onClick?: () => void;
    shape?: 'rounded-sm' | "rounded-md" | "rounded-full";
    size?: "small" | "medium" | "large";
    className?: string
}
export interface PostProps{
    title: string;
    content: string;
    userId: number;
}