import {createContext, useContext,useReducer} from 'react';
import bankReducer ,{bankActions}from 'reducers/bankReducer';



export const BankCtx = createContext();

export const BankCtxTag = ({ children })=>{
    
    const [banks, dispatch] = useReducer(bankReducer, []);

    return(<BankCtx.Provider value={{banks,dispatch,bankActions}}>
        {children}
        </BankCtx.Provider>)

}


export const useBankCtx = ()=>{
    return useContext(BankCtx)
}