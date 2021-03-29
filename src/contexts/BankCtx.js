import {createContext, useContext,useReducer,useMemo} from 'react';
import bankReducer ,{bankActions}from 'reducers/bankReducer';

console.log("create context")
export const BankCtx = createContext();

export const BankCtxTag = ({ children })=>{
    console.log("refresh context")
    const [banks, dispatch] = useReducer(bankReducer, []);
    

    const contextValue = useMemo(() => {
            return {banks,dispatch,bankActions};
    }, [banks,dispatch,bankActions]);

    return(<BankCtx.Provider value={contextValue}>
        {children}
        </BankCtx.Provider>)

}


export const useBankCtx = ()=>{
    console.log("use context")
    return useContext(BankCtx)
}