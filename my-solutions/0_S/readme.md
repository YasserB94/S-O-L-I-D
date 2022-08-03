# Single responsibility principle
Every class,method,function with the exception of so called _'God'_ classes should only have one responsibility.

Let's see this in action.

## Structure is key!
Ah, old.ts seems to be a mess! all of the code cramped up into one file....
Let's split this up by creating a folder structure.
- A main.ts in our root
- A new Folder for all our classes: 'Models'
    - Class Car
now is a good time to think about other classes we might need, or want while looking at the car class.
    - MusicPlayer
        - To handle everything to do with music
    - FuelTank
        - To keep track of the car's fuel
    - Odometer
        - This weird new word in my dictionary counts distance
    - Engine
        - A car can't drive without an engine!

## Codermode.sleep();Butcher.awake();
Time to start refactoring some code!
    - The car class
        - This class is to be treated as the god class, the one that brings everything together. Tough I can still treat it with our Single Responsibility principle.
            - Bring everything together!
            - To achieve this I will extract the data it holds to other classes so that I can use those within our car class instead of it holding values.
        - ! Since this is the god class, and I want to prevent global scoped variables, I will make an exception. to the car class not being allowed to hold actual data.
            - Any constant will be assigned and kept by the car, but will be immutable 
    - Engine
        - If I am on, you can drive!
    - Fueltank
        - I will hold your Fuel for you
    - MusicPlayer
        - I will control your music,volume,...
    - OdoMeter
        - I will count distance for you.
Now that I have a seperate class for everything, I'll make some getters within our car so that I can speak to those instances, and update the drive method so that it uses our instances instead of car's data attributes.

### The result
Now I have one object Car within my main TypeScript file that holds the functionality of the car.
within that object I can find every single parameter and functionality within it's designated object.
