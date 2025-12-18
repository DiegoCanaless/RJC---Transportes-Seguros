import CardCompanie from "../ui/CardCompanie"
import { FaHeartbeat } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";

import { socialWorks } from "@/data/socialworks";
import { schools } from "@/data/schools";
import { institutions } from "@/data/institutions";

export default function Collaborators() {



    return (
        <>
            <section className="flex flex-col gap-6 w-full  px-4 lg:flex-row lg:px-16 ">
                <CardCompanie 
                    icon= {<FaHeartbeat/>}
                    title= "Obras Sociales"
                    companies={socialWorks}
                />
                
                <CardCompanie 
                    icon= {<HiOfficeBuilding/>}
                    title= "Instituciones"
                    companies={institutions}
                />

                <CardCompanie 
                    icon= {<IoSchoolSharp/>}
                    title= "Colegios"
                    companies={schools}
                />
            </section>
        </>
    )
}