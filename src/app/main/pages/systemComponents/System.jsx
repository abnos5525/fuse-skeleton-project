import SkeletonSpinner from '../SkeletonSpinner';

import { useEffect, useState } from 'react';
import axios from 'axios';

import {ToastContainer } from 'react-toastify';
import _ from 'lodash';
import Box from '@mui/material/Box';

import { Paper} from '@mui/material';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

import AppContext from 'app/AppContext';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SystemItems from './SystemItems';

import InsertForm from './InsertForm';
import UpdateForm from './UpdateForm';
import getConnection from '../serverUrl';

const System = () => {
  const [forceRender, setForceRender] = useState(false);

  const [systemFormSwitch, setSystemFormSwitch] = useState(true);

  const [systemFormValues, setSystemFormValues] = useState({});

  const [system, setSystem] = useState([]);

  const [skeleton, setSkeleton] = useState(false)

  const [searchBySystemName, setSearchBySystem] = useState('');
  const [searchBySystemLatinName, setSearchBySystemLatinName] = useState('');
  const [searchBySystemNumber, setSearchBySystemNumber] = useState('');
  const [searchBySystemPort, setSearchBySystemPort] = useState('');
  
  const [filteredSystem, setFilteredSystem] = useState([]);
  //------------------------------------------------------
  //   -----------------------Show-------------------------------
  //------------------------------------------------------

  const [systemNumbers , setSystemNumbers] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        setSkeleton(true)
        const { data } = await axios.get(getConnection('systemInfo'));
        setSystem(data);
        
        const sysNums = data.map((obj)=> obj.systemNumber)
        setSystemNumbers(sysNums)
        setSkeleton(false)

      } catch (error) {
        setSkeleton(false)
        console.error(error);
      }
    };
    fetch();
  }, [forceRender]);

  useEffect(() => {
    const filtered = system.filter((item) =>
      item.systemName.includes(searchBySystemName) &&
      item.systemLatinName.toLowerCase().includes(searchBySystemLatinName.toLowerCase()) &&
      item.systemNumber.includes(searchBySystemNumber) &&
      item.systemPort.includes(searchBySystemPort)
    )
    setFilteredSystem(filtered)
  }, [system, searchBySystemName, searchBySystemLatinName, searchBySystemNumber, searchBySystemPort]);

// -----------------------Pagination---------------------------
const [currentPage, setCurrentPage] = useState(1); // شماره صفحه جاری
const itemsPerPage = 3; // تعداد موارد در هر صفحه
const totalPages = Math.ceil(filteredSystem.length / itemsPerPage);

const getCurrentPageItems = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredSystem.slice(startIndex, endIndex );
};

const handleSearch = () => {
  const filtered = system.filter((item) =>
    item.systemName.includes(searchBySystemName) &&
    item.systemLatinName.toLowerCase().includes(searchBySystemLatinName.toLowerCase()) &&
    item.systemNumber.includes(searchBySystemNumber) &&
    item.systemPort.includes(searchBySystemPort)
  );
  setFilteredSystem(filtered);

  setCurrentPage(1)

};

const handleSearchDebounced = _.debounce(handleSearch, 500);

useEffect(() => {
  handleSearchDebounced();
}, [system,searchBySystemName, searchBySystemLatinName, searchBySystemNumber, searchBySystemPort]);

  return (
    <>
      <AppContext.Provider
        value={{
          setSystemFormSwitch,
          systemFormSwitch,

          systemFormValues,
          setSystemFormValues,

          forceRender,
          setForceRender,
          
          systemNumbers,

          setSkeleton,
          skeleton
        }}
      >
      <ToastContainer />
        <Paper
          className="container min-h-auto sm:min-h-auto rounded-0 
                py-5 px-5 sm:p-5 sm:rounded-2xl sm:shadow mt-5"
          style={{ width: '95%' }}
        >

          {systemFormSwitch ? (
            <InsertForm/>
          ) : (
            <UpdateForm/>
          )}
        </Paper>

        <Paper
          className="container min-h-auto sm:min-h-auto rounded-0 px-1 sm:p-16 sm:rounded-2xl sm:shadow mt-4"
          style={{ width: '95%' }}
        >
          <Box
            className="row w-100 m-auto"
            style={{ height: '30px', borderBottom: '1px solid #aaa' }}
          >
            <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">نام سامانه</span>

            <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">
              نام لاتین سامانه
            </span>

            <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">شناسه سامانه</span>

            <span className="col-2 iranSans fs-4 fw-bold text-center mx-4 head">شماره پورت</span>
          </Box>

          <Box
            className="row w-100 m-auto searchs"
            style={{ height: '40px', borderBottom: '1px solid #aaa' }}
          >
            <Box className="col-auto iranSans mx-4 position-relative searchdiv">
              <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
              <input type="text" className="form-control inputSearch" placeholder="جستجو"
              value={searchBySystemName}
                        onChange={(e) => setSearchBySystem(e.target.value)}
                />
            </Box>

            <Box className="col-auto iranSans mx-4 position-relative searchdiv">
              <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
              <input type="text" className="form-control inputSearch" placeholder="جستجو" 
              value={searchBySystemLatinName}
                        onChange={(e) => setSearchBySystemLatinName(e.target.value)}
              />
            </Box>

            <Box className="col-auto iranSans mx-4 position-relative searchdiv">
              <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
              <input type="text" className="form-control inputSearch" placeholder="جستجو" 
              value={searchBySystemNumber}
                        onChange={(e) => setSearchBySystemNumber(e.target.value)}
              />
            </Box>

            <Box className="col-auto iranSans mx-4 position-relative searchdiv">
              <i className="fa-solid fa-magnifying-glass fa-rotate-90 iconSearch fa-lg"> </i>
              <input type="text" className="form-control inputSearch" placeholder="جستجو" 
              value={searchBySystemPort}
                        onChange={(e) => setSearchBySystemPort(e.target.value)}
              />
            </Box>
          </Box>

          <Box className="row w-100 m-auto" style={{ height: 'auto' }}>
          {skeleton ? <><SkeletonSpinner/> <SkeletonSpinner/></> :
          <>
            {filteredSystem.length > 0 ? (
              getCurrentPageItems().map((sys,index) => <SystemItems key={index} sys={sys} />)
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

        </Paper>
      </AppContext.Provider>
    </>
  );
};

export default System;
