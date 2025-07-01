import React, { createContext, useContext, useEffect, useState } from 'react';

export type Deal = {
    id: number;
    name: string;
    price: string;
    image: string;
};

type DealsContextType = {
    deals: Deal[];
    isLoading: boolean;
};

const DealsContext = createContext<DealsContextType | undefined>(undefined);

export const DealsProvider: React.FC<{ children: React.ReactNode}> = ({children}) => {
    const [deals, setDeals] = useState<Deal[]>([]);
    const [isLoading,setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchDeals = async () =>{
            try {
                const res =await fetch ('http://10.0.2.2:3001/deals');
                const data: Deal[] = await res.json();
                setDeals(data);    
            }catch (err) {
                console.error('Error fetching deals:',err);

            }finally{
                setIsLoading(false);
            }
        };

        fetchDeals();
    },[]);

    return (<DealsContext.Provider value = {{deals, isLoading}}>{children}</DealsContext.Provider>
    );


};

export const useDeals = () => {
    const context = useContext(DealsContext);
    if (!context) throw new Error('useDeals must be used withing a DealsProvider');
    return context;
};