import { describe, expect } from "vitest";
import ShopPage from "../Components/ShopPage";
import { screen, render } from "@testing-library/react";

describe('shop page component', () => {
    it('loads Shop Page', () => {
        render(<ShopPage/>)
        expect(screen.getByText('A list of items')).toBeInTheDocument();
    })
})
