import { ReactNode } from "react";

type TagProps = {
    children: ReactNode;

    textColor?: string;
    dotColor?: string;
};

export default function Tag({children, textColor = "text-black", dotColor = "bg-black",}: TagProps) {
    return (
        <div className={`inline-flex items-center gap-3 text-base leading-[1.6] font-normal ${textColor}`}>
            <span className={`w-3 h-3 rounded-full shrink-0 ${dotColor}`} />
            <span>{children}</span>
        </div>
    );
}
