import { breakfastDishes } from './breakfast'
import { rawDishes } from './raw'
import { coldStartersDishes } from './cold-starters'
import { bruschettaDishes } from './bruschetta'
import { wineSnacksDishes } from './wine-snacks'
import { saladsDishes } from './salads'
import { soupsDishes } from './soups'
import { pastaRisottoDishes } from './pasta-risotto'
import { meatDishes } from './meat'
import { fishDishes } from './fish'
import { grillDishes } from './grill'
import { mangalDishes } from './mangal'
import { sidesDishes } from './sides'
import type { Dish } from '../types'

export const dishes: Dish[] = [
    ...breakfastDishes,
    ...rawDishes,
    ...coldStartersDishes,
    ...bruschettaDishes,
    ...wineSnacksDishes,
    ...saladsDishes,
    ...soupsDishes,
    ...pastaRisottoDishes,
    ...meatDishes,
    ...fishDishes,
    ...grillDishes,
    ...mangalDishes,
    ...sidesDishes,
]
