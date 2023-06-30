/**
 * Test du component NavHeader
 **/

import { screen } from "@testing-library/react";

import { render } from "../../utils/test";
import NavHeader from "../NavHeader";

describe('NavHeader tests', () => {


    it('Should render without crash', () => {
        render(<NavHeader />);
        //Recherche du texte        
        expect(screen.getByText(/accueil/i)).toBeInTheDocument();
        expect(screen.getByText(/compétences/i)).toBeInTheDocument();

        expect(screen.getByText(/projet/i)).toBeInTheDocument();
        expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });

    it('Should render the correct number of links and buttons', () => {
        render(<NavHeader />);

        const links = screen.queryAllByTestId('nav-link');
        let buttons = screen.getAllByRole('button');
        expect(links.length).toEqual(4);
        expect(buttons.length).toEqual(5);

    });
})