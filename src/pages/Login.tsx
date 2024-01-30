import {
  Box,
  Button,
  Stack,
  Input,
  Heading,
  Progress,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  function openNotification() {
    navigate("/dashboard");
    toast({
      title: "Login realizado com sucesso!",
      description: "Você está pronto para acessar",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }
  return (
    <Stack width="100vw" height="100vh">
      <Box margin="auto">
        <Stack w="fit-content">
          <Heading>DashDev</Heading>
          <Progress value={80} />
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <Button colorScheme="blue" onClick={() => openNotification()}>
            Logar
          </Button>
          <Link to="/auth/register">
            <Button colorScheme="gray">Cadastrar</Button>
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
