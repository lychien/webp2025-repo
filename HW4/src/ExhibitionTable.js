import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { TextField, Button, Alert } from "@mui/material";

const pageSize = 10;

export default function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6"
        );
        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        setAllData(data);
        setFilteredData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = allData.filter((item) =>
      item.title?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // 重設分頁
  }, [searchText, allData]);

  const processedRows = filteredData.map((item, index) => ({
    id: item.UID || `temp-${index}`,
    title: item.title || "無標題",
    location: item.showInfo?.[0]?.location || "無地點",
    price: item.showInfo?.[0]?.price || "無票價",
  }));

  const paginatedRows = processedRows.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(processedRows.length / pageSize);

  const columns = [
    { field: "title", headerName: "名稱", width: 300 },
    { field: "location", headerName: "地點", width: 200 },
    { field: "price", headerName: "票價", width: 150 },
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div style={{ padding: 20 }}>
      <TextField
        label="🔍 名稱搜尋"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={paginatedRows}
          columns={columns}
          pageSizeOptions={[pageSize]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </div>

      <div style={{ marginTop: 20, display: "flex", gap: 10, alignItems: "center" }}>
        <Button
          variant="contained"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
        >
          上一頁
        </Button>
        <Button
          variant="contained"
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
        >
          下一頁
        </Button>
        <div>{`第 ${currentPage} / 共 ${totalPages} 頁`}</div>
      </div>
    </div>
  );
}
