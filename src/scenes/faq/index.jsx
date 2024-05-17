import { Box, useTheme, Typography , Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import Header from "../../components/Header";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px" >
            <Header
                title="FAQ"
                subtitle="Frequently Asked Questions Page"
            />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa commodi aperiam quos vel quisquam libero reiciendis tempora autem, ab sit, placeat quaerat consequuntur dignissimos cumque, optio sint suscipit voluptatum!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 2
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa commodi aperiam quos vel quisquam libero reiciendis tempora autem, ab sit, placeat quaerat consequuntur dignissimos cumque, optio sint suscipit voluptatum!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 3
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa commodi aperiam quos vel quisquam libero reiciendis tempora autem, ab sit, placeat quaerat consequuntur dignissimos cumque, optio sint suscipit voluptatum!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 4
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa commodi aperiam quos vel quisquam libero reiciendis tempora autem, ab sit, placeat quaerat consequuntur dignissimos cumque, optio sint suscipit voluptatum!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 5
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa commodi aperiam quos vel quisquam libero reiciendis tempora autem, ab sit, placeat quaerat consequuntur dignissimos cumque, optio sint suscipit voluptatum!
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question 6
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsa commodi aperiam quos vel quisquam libero reiciendis tempora autem, ab sit, placeat quaerat consequuntur dignissimos cumque, optio sint suscipit voluptatum!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
        </Box>
    )
}


export default FAQ;