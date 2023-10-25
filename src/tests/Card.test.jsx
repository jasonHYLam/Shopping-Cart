import { describe, expect } from "vitest";
import Card from "../Components/Card";
import { render, screen } from "@testing-library/react";

describe("card component", () => {
    it('has buttons', () => {
        render(<Card />)
        expect(screen.getByRole('button', {'name': '+'}))
    })
})