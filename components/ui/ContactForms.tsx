import { ReactNode } from "react";

interface ContactFormsProps{ 
    icon: ReactNode;
    title: string;
    value: string;
}


export default function ContactForms({
    icon,
    title,
    value
}: ContactFormsProps) {
    return(
        <>
            <div className="flex gap-5 items-center">
                <div className="bg-slate-20 text-yellowPrimary rounded-xl  bg-yellow-50 p-2">
                    {icon }
                </div>
                <div className="flex flex-col"> 
                    <h6 className="text-slate-700 text-xs">{title}</h6>
                    <p className="text-sm font-medium text-black">{value}</p>
                </div>
            </div>
        </>
    )
}
