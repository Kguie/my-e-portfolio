/**
 * Tests de la page Skills 
 **/

import { screen } from "@testing-library/react";

import { render } from "../../utils/test";
import Skills from "../Skills";

describe('Skills tests', () => {


    it('Should render without crash', () => {
        render(<Skills />);


        //Recherche du texte        
        expect(screen.getByText(/mes compétences techniques/i)).toBeInTheDocument();
        expect(screen.getByText(/HTML 5/i)).toBeInTheDocument();
        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("Typescript")).toBeInTheDocument();
    });

    it('Should render the correct number of cards', () => {
        render(<Skills />);

        const cards = screen.getAllByTestId('skill-card');
        expect(cards.length).toEqual(8);

    });
});