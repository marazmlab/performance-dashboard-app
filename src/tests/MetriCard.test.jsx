import { render, screen } from "@testing-library/react";
import MetriCard from "../components/MetriCard";

test("renders metric label and value", () => {
    render(<MetriCard label="LCP" value="1.2s" />);
    expect(screen.getByText("LCP")).toBeInTheDocument();
    expect(screen.getByText("1.2s")).toBeInTheDocument();
});