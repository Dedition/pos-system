const { Box } = require("@mui/material");
const { styled } = require("@mui/material/styles");

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export default FlexBetween;
