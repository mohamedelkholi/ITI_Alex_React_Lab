import { render, screen , fireEvent} from '@testing-library/react'
import Counter from "./Counter";

test("should render the default counter value", () => {
  //render
  //select element
  //event
  //expect result
  render(<Counter />);
  const counterText = screen.getByText("10");
  expect(counterText).toBeInTheDocument();
});

test('should render increment button', () => {
    render(<Counter/>);
    const incrementBtn= screen.getByRole('button',{name : /Increment/i});
    expect (incrementBtn).toBeInTheDocument();
    expect (incrementBtn).toBeEnabled();
})

test('when we click increment button the counter value should be incremented',()=>{
    render(<Counter/>);

    const conterText=screen.getByText('10')
    expect(conterText).toBeInTheDocument();
    expect(conterText).toHaveTextContent('10');
    
    const incrementBtn= screen.getByRole('button',{name : /Increment/i});
    fireEvent.click(incrementBtn);
    
    expect(conterText).toHaveTextContent('11');

})