import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5 },
        {field: "name", headerName: "NAME", flex: 1, cellClassName: "name-column--cell"},
        {field:  "phone", headerName: "PHONE NUMBER", flex: 1},
        {field:  "email", headerName: "EMAIL", flex: 1},
        {field: "cost", headerName: "COST", flex: 1, renderCell: (params) => {
            return (
                <Typography color={colors.greenAccent[500]} >
                    {params.row.cost}
                </Typography>
            )
        }},
        {field: "date", headerName: "DATE", flex: 1},
    ]
    return (
        <Box m="20px" >
            <Header 
                title="INVOICES"
                subtitle="List of Invoice Balances"
            />
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderBottom: "none"
                },
                "& .name-colum--cell":{
                    colors: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeader": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700]
                },
                "& .MuiCheckbox-root":{
                    color: `${colors.greenAccent[200]} !important`
                }
            }}>
                <DataGrid 
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices;