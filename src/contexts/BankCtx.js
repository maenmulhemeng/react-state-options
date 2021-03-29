import {createContext, useContext,useReducer,useMemo} from 'react';
import bankReducer ,{bankActions}from 'reducers/bankReducer';


export const BankCtx = createContext();

export const BankCtxTag = ({ children })=>{
    
    const [banks, dispatch] = useReducer(bankReducer, []);
    

    const contextValue = useMemo(() => {
            return {banks,dispatch,bankActions};
    }, [banks,dispatch,bankActions]);

    return(<BankCtx.Provider value={contextValue}>
        {children}
        </BankCtx.Provider>)

}


export const useBankCtx = ()=>{
    return useContext(BankCtx)
}