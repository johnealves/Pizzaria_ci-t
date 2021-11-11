import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { pizzas } from "./pizzas.json"
import App from './App';
import CardPizzaList from './Components/CardPizzaList';
import { RecoilRoot } from 'recoil';
import CardOrder from './Components/CardOrder/CardOrder';

const flavorsLength = pizzas.length;

describe("Check items on screen when rendering App", () => {
  test('Check if titles list and input search thera are in the document', () => {
    render(<App />);
    const menuTitle = screen.getByText(/Menu/i);
    expect(menuTitle).toBeInTheDocument();
    const orderTitle = screen.getByText(/Pedidos/i);
    expect(orderTitle).toBeInTheDocument();
    const inputSearch = screen.getByTestId(/input-search/);
    expect(inputSearch).toBeInTheDocument();
  });

  test('Check that there is a list of flavors on render', () => {
    render(<App />)
    const list = screen.getByRole("list", { name: /pizzas-flavors/i, })
    expect(list).toBeInTheDocument()
    
    const { getAllByRole } = within(list)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(flavorsLength)
  })

  test('verifies if there are buttons to add flavors to order', () => {
    render(<App />);
    const addButtons = screen.getAllByRole("button")
    expect(addButtons).toHaveLength(flavorsLength);
  })
})

describe("check filter events", () => {
  test('check that after typing "Mussarela" on input the flavor "Marguerita" is not in the document', () => {
    render(<App />)
    const SELECTED_FLAVOR = 'mussarela';
  
    const marguerita = screen.getByText("Marguerita")
    expect(marguerita).toBeInTheDocument();
  
    const inputSearch = screen.getByTestId(/input-search/);
    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, SELECTED_FLAVOR);
  
    expect(marguerita).not.toBeInTheDocument();
  })
})

describe('Check card of flavos and card of order', () => {
  const flavorTest = { 
    name: "Mussarela",
    ingredients: "Molho, Mussarela, Azeitona e Orégano",
    isPopular: true,
    quantity: 2
  };

  test("check the card of flavors has name and ingredinets", () => {
    render(
      <RecoilRoot>
        <CardPizzaList pizza={ flavorTest }/>
      </RecoilRoot>
    )

    const flavor = screen.getByText("Mussarela")
    expect(flavor).toBeInTheDocument();

    const ingredients = screen.getByText(/Molho, Mussarela, Azeitona e Orégano/i)
    expect(ingredients).toBeInTheDocument();

    const addButton = screen.getByRole("button")
    expect(addButton).toBeInTheDocument();
  })

  test("check the card order has name, ingredinets and quantity", () => {
    render(
      <RecoilRoot>
        <CardOrder pizza={ flavorTest }/>
      </RecoilRoot>
    )

    const flavor = screen.getByText("Mussarela")
    expect(flavor).toBeInTheDocument();

    const ingredients = screen.getByText(/Molho, Mussarela, Azeitona e Orégano/i)
    expect(ingredients).toBeInTheDocument();

    const quantity = screen.getByTestId("input-quantity")
    expect(quantity).toHaveValue("2")

    const addButton = screen.getByRole("button")
    expect(addButton).toBeInTheDocument();
  })
})
