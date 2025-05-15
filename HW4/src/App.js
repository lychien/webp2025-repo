// import React, { useState, useEffect, useCallback } from 'react';
// import { DataGrid, GridToolbar, useGridApiRef } from '@mui/x-data-grid';
// import { Button } from './components/ui/button'; // 假設路徑正確
// import { Input } from './components/ui/input';   // 假設路徑正確
// import { cn } from './lib/utils';        // 假設路徑正確
// import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert" // 假設路徑正確
// import { AlertCircle } from "lucide-react"

// const ExhibitionTable = () => {
//   const [allData, setAllData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchText, setSearchText] = useState('');
//   const pageSize = 10;
//   const apiRef = useGridApiRef();

//   // useCallback 用於優化，避免不必要的重新渲染
//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch(
//         'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6'
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       setAllData(data);
//       setFilteredData(data); // 初始化時，filteredData 為所有資料
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // 載入資料
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   // 處理搜尋
//     useEffect(() => {
//         if (!searchText) {
//             setFilteredData(allData);
//             return;
//         }

//         const lowerCaseSearchText = searchText.toLowerCase();
//         const newFilteredData = allData.filter((item) =>
//             item.title?.toLowerCase().includes(lowerCaseSearchText)
//         );
//         setFilteredData(newFilteredData);
//         // Reset to first page when the search term changes.
//         setCurrentPage(1);
//     }, [searchText, allData]);


//   const columns = [
//     { field: 'title', headerName: '名稱', width: 300 },
//     {
//       field: 'location',
//       headerName: '地點',
//       width: 200,
//       valueGetter: (params) => params.row.showInfo?.[0]?.location || '無地點',
//     },
//     {
//       field: 'price',
//       headerName: '票價',
//       width: 150,
//       valueGetter: (params) => params.row.showInfo?.[0]?.price || '無票價',
//     },
//   ];

//   // 計算分頁資訊
//   const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
//   const pageInfo = `第 ${currentPage} 頁 / 共 ${totalPages} 頁`;

//     // 處理分頁
//     const handlePageChange = (newPage) => {
//         if (newPage >= 1 && newPage <= totalPages) {
//             setCurrentPage(newPage);
//         }
//     };

//   const rows = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//   const delOldData = () => {
//     setFilteredData([]);
//     setCurrentPage(1);
//   };

//   if (loading) {
//     return <div className="text-center">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <Alert variant="destructive">
//         <AlertCircle className="h-4 w-4" />
//         <AlertTitle>Error</AlertTitle>
//         <AlertDescription>{error}</AlertDescription>
//       </Alert>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">景點觀光展覽資訊</h1>

//       <div className="mb-4 flex items-center gap-4">
//         <label htmlFor="searchInput" className="font-medium">
//           🔍 名稱搜尋：
//         </label>
//         <Input
//           id="searchInput"
//           type="text"
//           placeholder="請輸入關鍵字"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           className="max-w-xs"
//         />
//       </div>

//       <div style={{ height: 400, width: '100%' }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           getRowId={(row) => row.UID}
//           disableColumnFilter
//           disableColumnSelector
//           disableDensitySelector
//           disableRowSelection
//           slots={{
//             toolbar: GridToolbar,
//           }}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: pageSize,
//                 page: currentPage - 1,
//               },
//             },
//           }}
//           onPageChange={(page) => handlePageChange(page + 1)} // DataGrid 的 page 是從 0 開始
//           pagination
//           pageSizeOptions={[pageSize]}
//           rowCount={filteredData.length}
//           paginationMode="server"
//           apiRef={apiRef}
//         />
//       </div>

//       <div className="mt-4 flex items-center justify-center gap-4">
//         <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//           上一頁
//         </Button>
//         <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//           下一頁
//         </Button>
//         <span className="text-gray-600">{pageInfo}</span>
//       </div>

//       <div className="mt-4">
//         <Button variant="destructive" onClick={delOldData}>
//           delOldData
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ExhibitionTable;
import React from "react";
import ExhibitionTable from "./ExhibitionTable";

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">景點觀光展覽資訊</h1>
      <ExhibitionTable />
    </div>
  );
};

export default App;