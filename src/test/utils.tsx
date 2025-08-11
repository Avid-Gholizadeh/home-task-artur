import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

// Mock providers for testing
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

// Custom render function that includes providers
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };

// Test data
export const mockUser = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://example.com/avatar.jpg",
};

export const mockAuthContext = {
  isAuthenticated: false,
  user: null,
  login: vi.fn(),
  logout: vi.fn(),
};

export const mockAuthenticatedContext = {
  isAuthenticated: true,
  user: mockUser,
  login: vi.fn(),
  logout: vi.fn(),
};

// Mock functions
export const mockNavigate = vi.fn();
export const mockLocation = {
  pathname: "/",
  search: "",
  hash: "",
  state: null,
};

// Mock react-router-dom
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
  };
});

// Mock react-i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: vi.fn(),
      language: "en",
    },
  }),
}));

// Mock react-hot-toast
vi.mock("react-hot-toast", () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
    warning: vi.fn(),
    info: vi.fn(),
  },
}));

// Mock Apollo Client
vi.mock("@apollo/client", () => ({
  useQuery: vi.fn(),
  useMutation: vi.fn(),
  gql: vi.fn(),
}));
