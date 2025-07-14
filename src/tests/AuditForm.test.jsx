import { render, screen, fireEvent } from "@testing-library/react";
import AuditForm from "../components/AuditForm";

describe("AuditForm", () => {

    it("renders input and button", () => {
        render(<AuditForm onAudit={() => {}} />);
        expect(screen.getByLabelText(/website url/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /audit/i })).toBeInTheDocument();
    });

    it("shows error for invalid url", async () => {
        render(<AuditForm onAudit={() => {}} />);
        fireEvent.change(screen.getByLabelText(/website url/i), { target: { value: "not-a-url"} });
        fireEvent.click(screen.getByRole("button", { name: /audit/i }));
        const errorRegex = /Please enter a valid URL \(example\.com, www\.example\.com, https:\/\/\.\.\.\)/i;
        expect(await screen.findByText(errorRegex)).toBeInTheDocument();
    });
})