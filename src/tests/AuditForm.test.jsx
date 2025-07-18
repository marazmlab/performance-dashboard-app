import { render, screen, fireEvent } from "@testing-library/react";
import AuditForm from "../components/AuditForm";

describe("AuditForm", () => {

  it("renders input and button", () => {
    render(<AuditForm onAudit={() => { }} />);
    expect(screen.getByLabelText(/website url/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /audit/i })).toBeInTheDocument();
  });

  it("shows error for invalid url", async () => {
    render(<AuditForm onAudit={() => { }} />);
    fireEvent.change(screen.getByLabelText(/website url/i), { target: { value: "not-a-url" } });
    fireEvent.click(screen.getByRole("button", { name: /audit/i }));
    const errorRegex = /Please enter a valid URL \(example\.com, www\.example\.com, https:\/\/\.\.\.\)/i;
    expect(await screen.findByText(errorRegex)).toBeInTheDocument();
  });

  test('calls onAudit with the entered URL when form is submitted', () => {
    const mockOnAudit = jest.fn();
    render(<AuditForm onAudit={mockOnAudit} />);

    const input = screen.getByPlaceholderText(/enter a web page url/i);
    const button = screen.getByRole('button', { name: /audit/i });

    fireEvent.change(input, { target: { value: 'https://example.com' } });
    fireEvent.click(button);

    expect(mockOnAudit).toHaveBeenCalledWith('https://example.com');
    expect(mockOnAudit).toHaveBeenCalledTimes(1);
  });

  test('input has label or placeholder', () => {
  render(<AuditForm onAudit={() => {}} />);
  // checking if has label
  const inputByLabel = screen.queryByLabelText(/website url/i);
  // checking if has placeholder
  const inputByPlaceholder = screen.queryByPlaceholderText(/enter a web page url/i);

  expect(inputByLabel || inputByPlaceholder).toBeTruthy();
});
})