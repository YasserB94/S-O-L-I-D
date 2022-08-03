export interface iOven {
    turnOn(): void;
    turnOff(): void;
    bake(item: string): void;
}