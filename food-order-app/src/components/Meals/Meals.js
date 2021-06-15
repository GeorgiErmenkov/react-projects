import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import React from 'react';
import Card from '../UI/Card'

function Meals() {
    return (
        <Card>
            <MealsSummary />
            <AvailableMeals />
        </Card>
    )
}

export default Meals;