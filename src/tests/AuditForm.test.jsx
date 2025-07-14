import { render, screen, fireEvent } from "@testing-library/react";
import AuditForm from "../components/AuditForm";

describe("AuditForm", () => {
    it("renders input and button", () => {
        render(<AuditForm onAudit={() => {}} />);
        expect(screen.getByLabelText(/website url/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /audit/i })).toBeInTheDocument();
    });
})