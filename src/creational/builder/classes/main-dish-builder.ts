import { MealBuilderProtocol } from '../interfaces/meat-builder-protocol';
import { ComposedMeal } from './composed-meal';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);

    this._meal.add(rice, beans, meat);
    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('Cerveja', 7);

    this._meal.add(beverage);
    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Sorvete', 12);

    this._meal.add(dessert);
    return this;
  }

  getMeal(): ComposedMeal {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
