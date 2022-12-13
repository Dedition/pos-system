import { Search } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { GridToolbarDensitySelector, GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton } from "@mui/x-data-grid";
import FlexBetween from "components/Styles/FlexBetween";

const CustomDataGridToolbar = ({ setSearch, searchInput, setSearchInput }) => {
    return (
        <GridToolbarContainer>
            <FlexBetween width="100%">
                <FlexBetween>
                    <GridToolbarColumnsButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </FlexBetween>
                <TextField
                    label="Search..."
                    sx={{ mb: "0.5rem", width: "15rem" }}
                    onChange={(e) => { setSearchInput(e.target.value) }}
                    value={searchInput}
                    variant="filled"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setSearch(searchInput);
                            setSearchInput('');
                        }
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => {
                                        setSearch(searchInput);
                                        setSearchInput('');
                                    }}>
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </FlexBetween>
        </GridToolbarContainer>
    )
}

export default CustomDataGridToolbar
