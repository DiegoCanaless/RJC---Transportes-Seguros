import { ReactNode } from "react";


interface CompanieProps {
    icon: ReactNode;
    title: string;
    companies: readonly string[];
}




export default function CardCompanie({
    icon,
    title,
    companies,
}: CompanieProps) {
    return (
        <>
            <article className="bg-slate-100 p-4 rounded-lg border hover:shadow-md transition-all group ">
                <div className="flex items-center gap-4 mb-2">
                    <div className="flex bg-amber-100 text-yellowPrimary justify-center p-2  rounded-full transition-colors group-hover:bg-primary group-hover:text-white">
                        {icon}
                    </div>
                    <h5 className="text-md font-semibold">{title}</h5>
                </div>

                <ul className="flex flex-wrap w-full h-auto gap-2 p-2">
                    {companies.map((company) => (
                        <div key={company}className="text-xs text-slate-700 px-2 py-1 bg-light rounded-xl border">
                            {company}
                        </div>
                    ))}
                </ul>


            </article>
        </>
    )
}