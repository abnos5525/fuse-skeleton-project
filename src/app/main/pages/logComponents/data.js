const logData = [
    {
        describe: "این سامانه اول است",
        organizationName : 'سازمان1',
        softwareName : 'سامانه دوم',
        type: 1,
        event:'ورود',
        sensitive:'H',
    },
    {
        describe: "این سامانه دوم است",
        organizationName : 'سازمان2',
        softwareName : 'سامانه اول',
        type: 2,
        event:'خروج',
        sensitive:'L',
    },
    {
        describe: "این سامانه سوم است",
        organizationName : 'سازمان3',
        softwareName : 'سامانه سوم',
        type: 5,
        event:'ورود',
        sensitive:'H',
    },
]

export const getallLogData = () =>{
    return logData;
}