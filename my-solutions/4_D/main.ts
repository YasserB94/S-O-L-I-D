import Restaurant from "./Models/Restaurant";
import { ElectricOven as Stove, GasOven as Oven } from "./Models/Oven";
const bakeryTarget = <HTMLDivElement>document.getElementById('target-for-bakery');
const creperyTarget = <HTMLDivElement>document.getElementById('target-for-crepery');
const bakery = new Restaurant('Bakery', new Oven(bakeryTarget));
const crepery = new Restaurant('Crepry', new Stove(creperyTarget));
bakery.Cook('cookies');
crepery.Cook('crepes');