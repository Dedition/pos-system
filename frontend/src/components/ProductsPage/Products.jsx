import { useState } from 'react';
import { Box, Card, CardContent, CardActions, Collapse, Typography, Button, Rating, useTheme, useMediaQuery } from '@mui/material';

import { useGetProductsQuery } from 'state/api';
import Header from 'components/HeaderPage/Header';

const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat,
}) => {
    console.log("stat", stat)
    const [isExpanded, setIsExpanded] = useState(false);
    const theme = useTheme();
    const isNonMobile = useMediaQuery("(min-width:1000px)");
    const handleExpandClick = () => setIsExpanded(!isExpanded);


    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                    color: theme.palette.grey[400],
                },
            }}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: "14" }}
                    color={theme.palette.secondary[100]}
                    gutterBottom>
                    {category}
                </Typography>
                <Typography
                    component={"div"}
                    variant="h5"
                >
                    {name}
                </Typography>
                <Typography
                    sx={{ mb: "1.5rem" }}
                    color={theme.palette.secondary[400]}
                >
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating
                    value={rating}
                    readOnly
                    precision={0.5}
                    size="small"
                    sx={{ mb: "1.5rem" }}
                />
                <Typography
                    variant="body2">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                    size="small"
                    variant="primary"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? "Hide" : "Show More"}
                </Button>
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{ color: theme.palette.neutral[300] }}>
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {supply}</Typography>
                    <Typography>Yearly Sales This Year: {stat.yearlySalesTotal}</Typography>
                    <Typography>Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}</Typography>
                </CardContent>
            </Collapse>
        </Card>

    );
};

const Products = () => {
    const { data, isLoading } = useGetProductsQuery();
    const isNonMobile = useMediaQuery("(min-width:1000px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="PRODUCTS" subtitle="View your list of products." />

            {data || !isLoading ? (
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{
                        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                    }}
                >
                    {data.map(
                        ({
                            _id,
                            name,
                            description,
                            price,
                            rating,
                            category,
                            supply,
                            stat,
                        }) => (
                            <Product
                                key={_id}
                                _id={_id}
                                name={name}
                                description={description}
                                price={price}
                                rating={rating}
                                category={category}
                                supply={supply}
                                stat={stat}
                            />
                        )
                    )}
                </Box>
            ) : (
                <>Loading...</>
            )}
        </Box>
    )
}

export default Products
