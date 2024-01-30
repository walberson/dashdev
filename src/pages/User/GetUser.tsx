import { Heading, Box, Text, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface User {
  login: string;
  bio: string;
}

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default function GetUser() {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      await timeout(4000);
      const req = await fetch(`https://api.github.com/users/${username}`);
      const res = await req.json();
      if (!req.ok) {
        setLoading(false);
        setError("usuário não encontrado");
        return;
      }
      setLoading(false);
      setUser(res);
    }
    getUser();
  }, []);

  return (
    <Box>
      {user && (
        <>
          <Heading>{user.login}</Heading>
          <Text>{user.bio}</Text>
        </>
      )}
      {loading && (
        <Heading>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          Carregando...
        </Heading>
      )}
      {error && <Text>{error}</Text>}
    </Box>
  );
}
