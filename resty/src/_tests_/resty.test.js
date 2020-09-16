import React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'

// import App from '../App.js'
import Results from '../components/Results/Results';
import Form from '../components/Form/Form';


// test('dynamically updates number', async () => {
//     render(<App />);
//     const input = screen.getByTestId('input');
//     const button = screen.getByTestId("button")
//     fireEvent.change(input, { target: { value: "https://swapi.dev/api/people/" } });
//     fireEvent.click(button);
//     await waitFor(() => screen.getByText('Luke Skywalker'))
//     // const output = screen.getByTestId('results');
//     // expect(output).toHaveTextContent('"Luke Skywalker"')
//   })

it('should test Results component', async () => {

    const results = {
    birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    films:[
        "http://swapi.dev/api/films/1/", 
    "http://swapi.dev/api/films/2/", 
    "http://swapi.dev/api/films/3/", 
    "http://swapi.dev/api/films/6/"
],
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "http://swapi.dev/api/planets/1/",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
    species: [],
    starships: [
        "http://swapi.dev/api/starships/12/", 
        "http://swapi.dev/api/starships/22/"
    ],
    url: "http://swapi.dev/api/people/1/",
    }

    const headers = {
        "content-type":"application/json",
}
render (<Results count ={1} results={results} headers={headers} />);
  screen.debug();

  const count = screen.getByRole('heading');
  expect(count).toHaveTextContent('Count: 1');
  expect(screen.getByText('"Luke Skywalker"'));
  expect(screen.getByText('"http://swapi.dev/api/people/1/"'));
  expect(screen.getByText('Count: 1'));

});





it('should render form from Form components', async () => {
  render (<Form promt="Go!" /> );

  // Uncomment below and check your terminal for coolness
  screen.debug();
  expect(screen.getByText('Go!'));
  expect(screen.getByText('GET'));
  expect(screen.getByText('POST'));
  expect(screen.getByText('PUT'));
  expect(screen.getByText('DELETE'));

});