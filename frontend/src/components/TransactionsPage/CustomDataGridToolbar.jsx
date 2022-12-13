import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { GridToolbarDensitySelector, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton } from "@mui/x-data-grid";
import FlexBetween from "components/Styles/FlexBetween";

const CustomDataGridToolbar = () => {
    return (
        <GridToolbarContainer>
            <FlexBetween>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
                <TextField
                    label="Search..."
                    sx={{ mb: "0.5rem", width: "15rem" }}
                    // value={searchInput}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => { }}
                                >

                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                // onChange={(e) => setSearchInput(e.target.value)}
                />
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default CustomDataGridToolbar
