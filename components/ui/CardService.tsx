import { ReactNode } from "react"; 

interface CardServiceProp { 
    icon: ReactNode; 
    title: String; 
    description: String; 
}


export default function CardService({
    icon,
    title,
    description,
}: CardServiceProp) {
    return (
        <div className="group flex flex-col p-8 bg-white items-start rounded-lg hover:shadow-md transition-all">

            <div className="  bg-amber-100/20 w-10 h-10 rounded p-2 flex justify-center items-center  text-primary transition-colors  group-hover:bg-primary  group-hover:text-white mb-2">
                {icon}
            </div>

            <h3 className="font-semibold text-lg mb-2">
                {title}
            </h3>

            <p className="text-sm text-slate-700 text-start">
                {description}
            </p>
        </div>
    );
}
