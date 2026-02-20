import { Component, signal } from "@angular/core";
import { ButtonModule } from "primeng/button";

@Component({
    standalone: true,
    imports: [ButtonModule],
    templateUrl: './counter-page.component.html',
    styles: `
        button {
            padding: 5px;
            margin: 5px 10px;
            width: 75px;
        }
    `,
})
export class CounterPageComponents {

    counter = 10;
    counterSignal = signal(10);

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update((current) => current + value);
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}
