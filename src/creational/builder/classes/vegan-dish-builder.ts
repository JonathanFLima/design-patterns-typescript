import { MealBuilderProtocol } from '../interfaces/meat-builder-protocol';
import { ComposedMeal } from './composed-meal';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private _meal: ComposedMeal = new ComposedMeal();

  reset(): this {
    this._meal = new ComposedMeal();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);

    this._meal.add(rice, beans);
    return this;
  }

  getMeal(): ComposedMeal {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
