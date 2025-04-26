import { Container, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";

export const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

export default function App() {
  return (
    <HStack >
      <Navbar />
        <Container>
          <TodoForm />
        </Container>
    </HStack>
  );
}
