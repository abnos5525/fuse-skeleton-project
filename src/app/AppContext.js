import { createContext } from 'react';

const AppContext = createContext({
    forceRender: false,
    setForceRender: () =>[],
    
    systemFormSwitch: true,
    setSystemFormSwitch:() => [],

    systemFormValues: {},
    setSystemFormValues: () => {},

    systemNumbers: [],

    // ----------------Log--------------------
    logFormSwitch: [],
    setLogFormSwitch: ()=>[],

    logFormValues: {},
    setLogFormValues:()=>{},

    forceRenderLog: false,
    setForceRenderLog: () => [],

    
    setOrganInfo: () => [],
    organInfo: [],

    setSystemInfo: () => [],
    systemInfo: [],

    // ----------------Acception--------------------
    acceptFormSwitch: true,
    setAcceptFormSwitch: () =>[],

    acceptFormValues: {},
    setAcceptFormValues: () =>[],

    forceRenderAccept: [],
    setForceRenderAccept: () =>[],

    systemInfoAccept: [],
    setSystemInfoAccept: () =>[],

    organInfoAccept: [],
    setOrganInfoAccept: () =>[],

});

export default AppContext;
