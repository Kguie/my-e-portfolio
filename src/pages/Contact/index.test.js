/**
 * Test de la page Contact
 **/

import { screen } from "@testing-library/react";

import { render } from "../../utils/test";
import Contact from "../Contact";

describe('Contact tests', () => {


    it('Should render without crash', () => {
        render(<Contact />);
        //Recherche du texte        
        expect(screen.getByText(/Téléphone/i)).toBeInTheDocument();
        expect(screen.getByText(/Petit-Bourg/i)).toBeInTheDocument();

        expect(screen.getByText("LinkedIn")).toBeInTheDocument();
        expect(screen.getByText("kevin.guieba@gmail.com")).toBeInTheDocument();
    });

    it('Should render the correct number of links', () => {
        render(<Contact />);

        const links = screen.getAllByRole('link');
        expect(links.length).toEqual(4);

    });
});