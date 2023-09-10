import { useEffect, useState } from "react";
import { Paper} from "@mui/material";
import axios from "axios";

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

import AcceptionItems from "./AcceptionItems";


const Acception = () =>{

  const [acceptFormSwitch, setAcceptFormSwitch] = useState(true);

  const [acceptFormValues, setAcceptFormValues] = useState({});

  const [acceptInfo, setAcceptInfo] = useState([]);

  const [systemInfoAccept, setSystemInfoAccept] = useState([]);
  const [organInfoAccept, setOrganInfoAccept] = useState([]);

  const [forceRenderAccept, setForceRenderAccept] = useState(false);

  // مقادیر ورودی سرچ ها
  const [searchByOrganName, setSearchByOrganName] = useState('');
  const [searchBySystemName, setSearchBySystem] = useState('');
  const [searchBySystemAddress, setSearchBySystemAddress] = useState('');
  const [searchBySystemPort, setSearchBySystemPort] = useState('');
  const [searchBySystemMainAddress, setSearchBySystemMainAddress] = useState('');
  const [searchBySystemMainPort, setSearchBySystemMainPort] = useState('');
  const [searchByStatus, setSearchByStatus] = useState('');

  const [filteredAccept, setFilteredAccept] = useState([]);

    //------------------------------------------------------
  //   -----------------------Show-------------------------------
  //------------------------------------------------------
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('http://localhost:8085/server/acceptInfo');
        setAcceptInfo(data);

      } catch (error) {
        console.error(error);
      }
    };
    fetch();
  }, [forceRenderAccept]);

  useEffect(() => {
    const filtered = acceptInfo.filter((item) =>
      item.organName.includes(searchByOrganName) &&
      item.systemName.includes(searchBySystemName) &&
      item.systemAddress.includes(searchBySystemAddress) &&
      item.systemPort.includes(searchBySystemPort) &&
      item.systemMainAddress.includes(searchBySystemMainAddress) &&
      item.systemMainPort.includes(searchBySystemMainPort) &&
      item.status.includes(searchByStatus)
    )
    setFilteredAccept(filtered)
  }, [acceptInfo, searchByOrganName, searchBySystemName, searchBySystemAddress, searchBySystemPort, searchBySystemMainAddress,searchBySystemMainPort,searchByStatus]);

// -----------------------Pagination---------------------------
const [currentPage, setCurrentPage] = useState(1); // شماره صفحه جاری
const itemsPerPage = 3; // تعداد موارد در هر صفحه
const totalPages = Math.ceil(filteredAccept.length / itemsPerPage);

const getCurrentPageItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredAccept.slice(startIndex, endIndex);
};

const handleSearchDebounced = _.debounce(()=>{

  const filtered = acceptInfo.filter((item) =>
  item.organName.includes(searchByOrganName) &&
  item.systemName.includes(searchBySystemName) &&
  item.systemAddress.includes(searchBySystemAddress) &&
  item.systemPort.includes(searchBySystemPort) &&
  item.systemMainAddress.includes(searchBySystemMainAddress) &&
  item.systemMainPort.includes(searchBySystemMainPort) &&
  item.status.includes(searchByStatus) 
);
setFilteredAccept(filtered);

}, 1000);

const handlePageChange = (event, value) => {
  setCurrentPage(value);
};

useEffect(() => {
  handleSearchDebounced();
}, [acceptInfo,searchByOrganName, searchBySystemName, searchBySystemAddress, searchBySystemPort,searchBySystemMainAddress,searchBySystemMainPort,searchByStatus]);


    return(
        <>
            <AppContext.Provider value={{
                acceptFormSwitch,
                setAcceptFormSwitch,
                acceptFormValues,
                setAcceptFormValues,

                forceRenderAccept,
                setForceRenderAccept,

                systemInfoAccept,
                setSystemInfoAccept,

                organInfoAccept,
                setOrganInfoAccept,
            }}>
            <Paper className=" container min-h-auto sm:min-h-auto rounded-0 py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5" style={{width:'95%'}}>

      <ToastContainer />
                
                {acceptFormSwitch ? (
                    <InsertForm/>
                ) : (
                    <UpdateForm/>
                )}
            </Paper>

            <Paper className="container min-h-auto sm:min-h-auto rounded-0 px-1 sm:p-16 sm:rounded-2xl sm:shadow mt-4" style={{width:'95%'}}>
                        <Box className="row w-100 m-auto" 
                            style={{height:'30px',borderBottom:'1px solid #aaa'}}>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>نام سازمان</span>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>نام سامانه</span>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>آدرس عامل</span>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>پورت عامل</span>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>آدرس سامانه اصلی</span>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>پورت سامانه اصلی</span>
                            <span className='col-2 iranSans fs-6 fw-bold text-center head3'>وضعیت</span>
                        </Box>
                <Box className="row w-100 m-auto searchs" 
                            style={{height:'40px',borderBottom:'1px solid #aaa'}}>
                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchByOrganName}
                        onChange={(e) => setSearchByOrganName(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchBySystemName}
                        onChange={(e) => setSearchBySystem(e.target.value)}
                  />
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchBySystemAddress}
                        onChange={(e) => setSearchBySystemAddress(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchBySystemPort}
                        onChange={(e) => setSearchBySystemPort(e.target.value)}
                  />
                            </Box>


                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchBySystemMainAddress}
                        onChange={(e) => setSearchBySystemMainAddress(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchBySystemMainPort}
                        onChange={(e) => setSearchBySystemMainPort(e.target.value)}
                  />
                            </Box>

                            <Box className="col-auto iranSans position-relative searchdiv3">
                            <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
                  <input type="text" className="form-control inputSearch3" placeholder="جستجو"
                    value={searchByStatus}
                        onChange={(e) => setSearchByStatus(e.target.value)}
                  />
                            </Box>
                </Box>


                        <Box className="row w-100 m-auto" style={{ height: 'auto' }}>
                            {filteredAccept.length > 0 ? (
                                getCurrentPageItems().map(accept=> <AcceptionItems key={accept.id} accept={accept} />)
                            ) : (
                            <p className="text-danger fs-3 text-center iranSans py-3">موردی یافت نشد</p>
                            )}
                        </Box>

                        {filteredAccept.length > 0 ?
                        <Stack spacing={2} className="pagination" style={{ width: '450px' }}>
                            <Pagination className="pagination_items"
                            color="secondary"
                            count={totalPages}
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
                        :
                        <Stack spacing={2} className="pagination" style={{ width: '450px' }}>
                            <Pagination className="pagination_items"
                                color="secondary"
                                count={1}
                                onChange={(event, page) => setCurrentPage(page)}
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
        }
                   
                </Paper>
            </AppContext.Provider>
        </>
    )
}

export default Acception;