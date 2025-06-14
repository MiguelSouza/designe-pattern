import { SimpleCoffee } from "../../../../gof/structural/decorator/entities/SimpleCoffee";
import { WithMilk } from "../../../../gof/structural/decorator/entities/WithMilk";
import { WithSugar } from "../../../../gof/structural/decorator/entities/WithSugar";
import { WithWhippedCream } from "../../../../gof/structural/decorator/entities/WithWhippedCream";

describe("Decorator Pattern - Coffee", () => {
  it("Café simples", () => {
    const coffee = new SimpleCoffee();
    expect(coffee.getDescription()).toBe("Simple coffee");
    expect(coffee.getCost()).toBe(5);
  });

  it("Café com leite", () => {
    const coffee = new WithMilk(new SimpleCoffee());
    expect(coffee.getDescription()).toBe("Simple coffee, Milk");
    expect(coffee.getCost()).toBe(7);
  });

  it("Café com leite e chantili", () => {
    const coffee = new WithWhippedCream(new WithMilk(new SimpleCoffee()));
    expect(coffee.getDescription()).toBe("Simple coffee, Milk, Whipped Cream");
    expect(coffee.getCost()).toBe(10);
  });

  it("Café com leite, chantili e açúcar", () => {
    const coffee = new WithSugar(new WithWhippedCream(new WithMilk(new SimpleCoffee())));
    expect(coffee.getDescription()).toBe("Simple coffee, Milk, Whipped Cream, Sugar");
    expect(coffee.getCost()).toBe(11);
  });
});
