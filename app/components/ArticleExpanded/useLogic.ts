import { useEffect, useState } from "react";
import { LanguageProps } from ".";
import { urlFor } from "@/paolo-mauri/client";
import { getByID, getByLang } from "@/paolo-mauri/sanity.utils";



export const useLogic = ({language}: LanguageProps,id:String)=>{
    const [articleInfo, setArticlesInfo] = useState<any>([]);

    useEffect(() => {
        const handleFetch = async () => {
            const data: any = await getByID(id as string) ?? []
            setArticlesInfo(data)
        }

        handleFetch()
    },[language])
    
    return {
        articleInfo
    }
}