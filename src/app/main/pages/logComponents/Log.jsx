import { useEffect, useState, useContext } from "react";
import { Paper} from "@mui/material";
import axios from "axios";
import SkeletonSpinner from "../SkeletonSpinner";
import {ToastContainer } from 'react-toastify';
import _ from 'lodash';

import AppContext from "app/AppContext";

import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import InsertForm from "./InsertForm";
import UpdateForm from "./UpdateForm";

import LogItems from "./LogItems";
import getConnection from "../serverUrl";


const Log = () =>{

  const [skeleton,setSkeleton] = useState(false)

  const [logFormSwitch, setLogFormSwitch] = useState(true);

  const [logFormValues, setLogFormValues] = useState({});

  const [logInfo, setLogInfo] = useState([]);

  const [systemInfo, setSystemInfo] = useState([]);
  const [organInfo, setOrganInfo] = useState([]);

  const [forceRenderLog, setForceRenderLog] = useState(false);

  // مقادیر ورودی سرچ ها
  const [searchByOrganName, setSearchByOrganName] = useState('');
  const [searchBySystemName, setSearchBySystem] = useState('');
  const [searchByGroup, setSearchByGroup] = useState('');
  const [searchByEvent, setSearchByEvent] = useState('');
  const [searchBySensitive, setSearchBySensitive] = useState('');
  const [searchByDescribtion, setSearchByDescribtion] = useState('');

  const [filteredLog, setFilteredLog] = useState([]);

    //------------------------------------------------------
  //   -----------------------Show-------------------------------
  //------------------------------------------------------
  useEffect(() => {
    const fetch = async () => {
      try {
        setSkeleton(true)
        const { data } = await axios.get(getConnection('logInfo'));
        setLogInfo(data);
        setSkeleton(false)
      } catch (error) {
        setSkeleton(false)
        console.error(error);
      }
    };
    fetch();
  }, [forceRenderLog]);

  useEffect(() => {
    const filtered = logInfo.filter((item) =>
      item.organName.includes(searchByOrganName) &&
      item.systemName.includes(searchBySystemName) &&
      item.logGroup.includes(searchByGroup) &&
      item.event.includes(searchByEvent) &&
      item.sensitive.includes(searchBySensitive) &&
      item.describtion.includes(searchByDescribtion) 
    )
    setFilteredLog(filtered)
  }, [logInfo, searchByOrganName, searchBySystemName, searchByGroup, searchByEvent, searchBySensitive,searchByDescribtion]);

// -----------------------Pagination---------------------------
const [currentPage, setCurrentPage] = useState(1); // شماره صفحه جاری
const itemsPerPage = 3; // تعداد موارد در هر صفحه
const totalPages = Math.ceil(filteredLog.length / itemsPerPage);

const getCurrentPageItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredLog.slice(startIndex, endIndex);
};

const handleSearchDebounced = _.debounce(()=>{

  const filtered = logInfo.filter((item) =>
  item.organName.includes(searchByOrganName) &&
  item.systemName.includes(searchBySystemName) &&
  item.logGroup.includes(searchByGroup) &&
  item.event.includes(searchByEvent) &&
  item.sensitive.includes(searchBySensitive) &&
  item.describtion.includes(searchByDescribtion)
);
setFilteredLog(filtered);

}, 1000);

const handlePageChange = (event, value) => {
  setCurrentPage(value);
};

useEffect(() => {
  handleSearchDebounced();
}, [logInfo,searchByOrganName, searchBySystemName, searchByGroup, searchByEvent,searchBySensitive,searchByDescribtion]);


    return(
        <>
            <AppContext.Provider value={{
                logFormSwitch,
                setLogFormSwitch,
                logFormValues,
                setLogFormValues,

                forceRenderLog,
                setForceRenderLog,

                systemInfo,
                setSystemInfo,

                organInfo,
                setOrganInfo,
            }}>
            <Paper className=" container min-h-auto sm:min-h-auto rounded-0 py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>

      <ToastContainer />
                
                {logFormSwitch ? (
                    <InsertForm/>
                ) : (
                    <UpdateForm/>
                )}
            </Paper>

            <Paper className="container min-h-auto sm:min-h-auto rounded-0 px-1 sm:p-16 sm:rounded-2xl sm:shadow mt-4" style={{width:'95%'}}>
                        <Box className="row w-100 m-auto" 
                            style={{height:'30px',borderBottom:'1px solid #aaa'}}>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>توضیحات</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>نام سازمان</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>نام سامانه</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>دسته بندی</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>نوع رویداد</span>
                            <span className='col-2 iranSans fs-5 fw-bold text-center head2'>حساسیت رویداد</span>
                        </Box>

                        <Box className="row w-100 m-auto searchs" 
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"
                            value={searchByDescribtion}
                        onChange={(e) => setSearchByDescribtion(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"
                    value={searchByOrganName}
                        onChange={(e) => setSearchByOrganName(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"
                    value={searchBySystemName}
                        onChange={(e) => setSearchBySystem(e.target.value)}
                  />
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"
                    value={searchByGroup}
                        onChange={(e) => setSearchByGroup(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"
                    value={searchByEvent}
                        onChange={(e) => setSearchByEvent(e.target.value)}
                  />
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv2">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch2 fa-lg"> </i>
                  <input type="text" className="form-control inputSearch2" placeholder="جستجو"
                    value={searchBySensitive}
                        onChange={(e) => setSearchBySensitive(e.target.value)}
                  />
                            </Box>

                        </Box>

                        <Box className="row w-100 m-auto" style={{ height: 'auto' }}>
                          {skeleton ? <> <SkeletonSpinner/> <SkeletonSpinner/> </> :
                          <>
                            {filteredLog.length > 0 ? (
                                getCurrentPageItems().map(log=> <LogItems key={log.id} log={log} />)
                            ) : (
                            <p className="text-danger fs-3 text-center iranSans py-3">موردی یافت نشد</p>
                            )}
                            </>
                          }
                        </Box>

                        <Stack spacing={2} className="pagination" style={{ width: '450px' }}>
                            <Pagination className="pagination_items"
                            color="secondary"
                            count={totalPages ? totalPages : 10}
                            page={currentPage}
                            onChange={handlePageChange}
                            renderItem={(item) => (
                                <PaginationItem
                                components={{
                                    next: KeyboardDoubleArrowLeftIcon,
                                    previous: KeyboardDoubleArrowRightIcon,
                                }}
                                {...item}
                                />
                            )}
                            />
                        </Stack>

                   
                </Paper>
            </AppContext.Provider>
        </>
    )
}

export default Log;