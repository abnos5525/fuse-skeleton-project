const acceptionData = [
    {
        name: "سازمان1",
        software : 'سامانه1',
        address : 'http://53.15.52.32',
        portware: 5462,
        mainAddress:'http://13.19.52.79',
        mainport:6874,
        status: 'ok'
    },
    {
        name: "سازمان2",
        software : 'سامانه2',
        address : 'http://53.15.52.32',
        portware: 1468,
        mainAddress:'http://13.19.52.79',
        mainport:2263,
        status: 'ok'
    },
    {
        name: "سازمان3",
        software : 'سامانه3',
        address : 'http://53.15.52.32',
        portware: 6236,
        mainAddress:'http://13.19.52.79',
        mainport:6485,
        status: 'ok'
    },
]

export const getallAcceptionData = () =>{
    return acceptionData;
}