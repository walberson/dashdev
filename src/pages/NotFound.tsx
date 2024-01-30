import { Box, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <Box>
            <Heading>Página não encontrada</Heading>
            <Link to="/auth/login">
            <Button >Voltar para página inicial</Button>
            </Link>
        </Box>
    )
}