import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toaster } from "sonner";
import { afterEach, describe, expect, it, vi } from "vitest";

import type { ApiResponse } from "@/types/api";
import type { Lead } from "@/types/lead";

const { postLeadMock } = vi.hoisted(() => ({
  postLeadMock: vi.fn(),
}));

vi.mock("@/api/endpoints/lead", () => ({
  postLead: postLeadMock,
}));

import { LeadForm } from "./LeadForm";

const renderLeadForm = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <LeadForm />
      <Toaster />
    </QueryClientProvider>,
  );
};

const fillValidLead = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
  await user.type(screen.getByLabelText("Email"), "ada@example.com");
  await user.type(
    screen.getByLabelText("Project request"),
    "Build a reliable lead intake flow.",
  );
  await user.click(
    screen.getByRole("checkbox", {
      name: "I agree to the processing of my personal data.",
    }),
  );
};

const createDeferred = <T,>() => {
  let resolve: (value: T) => void;

  const promise = new Promise<T>((promiseResolve) => {
    resolve = promiseResolve;
  });

  return { promise, resolve: resolve! };
};

describe("LeadForm", () => {
  afterEach(() => {
    postLeadMock.mockReset();
  });

  it("shows Zod validation errors and does not submit invalid data", async () => {
    const user = userEvent.setup();

    renderLeadForm();

    await user.click(screen.getByRole("button", { name: /send request/i }));

    expect(await screen.findByText("Enter your name")).toBeVisible();
    expect(await screen.findByText("Enter a valid email")).toBeVisible();
    expect(await screen.findByText("Tell us what you need")).toBeVisible();
    expect(
      await screen.findByText(
        "Consent to personal data processing is required",
      ),
    ).toBeVisible();
    expect(postLeadMock).not.toHaveBeenCalled();
  });

  it("submits valid data and confirms success with a toast", async () => {
    const user = userEvent.setup();
    const lead: Lead = {
      name: "Ada Lovelace",
      email: "ada@example.com",
      request: "Build a reliable lead intake flow.",
      consent: true,
    };
    const response: ApiResponse<null> = { success: true, data: null };

    postLeadMock.mockResolvedValue(response);
    renderLeadForm();

    await fillValidLead(user);
    await user.click(screen.getByRole("button", { name: /send request/i }));

    await waitFor(() => {
      expect(postLeadMock).toHaveBeenCalledWith(lead);
    });
    expect(await screen.findByText("Request sent successfully!")).toBeVisible();
    expect(screen.getByLabelText("Name")).toHaveValue("");
    expect(screen.getByLabelText("Email")).toHaveValue("");
    expect(screen.getByLabelText("Project request")).toHaveValue("");
  });

  it("shows pending state and prevents duplicate submissions", async () => {
    const user = userEvent.setup();
    const deferred = createDeferred<ApiResponse<null>>();

    postLeadMock.mockReturnValue(deferred.promise);
    renderLeadForm();

    await fillValidLead(user);
    const submitButton = screen.getByRole("button", { name: /send request/i });

    await user.click(submitButton);

    expect(
      await screen.findByRole("button", { name: /sending/i }),
    ).toBeDisabled();
    await user.click(submitButton);
    expect(postLeadMock).toHaveBeenCalledTimes(1);

    deferred.resolve({ success: true, data: null });
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /send request/i }),
      ).toBeEnabled();
    });
  });

  it("renders a request error after a failed submission", async () => {
    const user = userEvent.setup();

    postLeadMock.mockRejectedValue(new Error("Network unavailable"));
    renderLeadForm();

    await fillValidLead(user);
    await user.click(screen.getByRole("button", { name: /send request/i }));

    expect(
      await screen.findByText("Failed to send the request. Please try again."),
    ).toBeVisible();
  });
});
