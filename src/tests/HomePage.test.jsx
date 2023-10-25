import { describe } from "vitest";
import HomePage from "../Components/HomePage";

import { render, screen } from "@testing-library/react";

describe("HomePage component", () => {
    it("renders home page", () => {
        render(<HomePage />);
        expect(screen.getByText('Welcome to the terradome'))

    })
})
