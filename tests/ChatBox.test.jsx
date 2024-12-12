import { render, fireEvent, screen } from "@testing-library/react";
import ChatBox from "../src/components/ChatBox";

test("renders ChatBox and handles user input", () => {
  render(<ChatBox />);
  const input = screen.getByPlaceholderText("Digite sua mensagem...");
  fireEvent.change(input, {
    target: { value: "Qual o melhor treino para hipertrofia?" },
  });
  expect(input.value).toBe("Qual o melhor treino para hipertrofia?");
});
