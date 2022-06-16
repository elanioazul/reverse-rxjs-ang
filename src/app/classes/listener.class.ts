import { Subscription } from "rxjs";
import { BroadcastService } from './broadcastService.class';
import { IBroadcastEvent, EventKeys} from '../interfaces/busEvents.interface';
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
export class Listener {
    private eventSubscription: Subscription;
    private listenerName: string;
    constructor(
        broadCastService : BroadcastService,//it acts as the event bus
        eventKey: EventKeys,//used to indicate which events this listener is interested in
        private listenerNameYeah: string//this is to differenciate the two Listeners, but cannot make it work
    ) {
        //_.bindAll(this, "reactToEvent");
        this.listenerName = listenerNameYeah;
        this.eventSubscription = broadCastService.on(eventKey).subscribe(this.reactToEvent);
    }

    private reactToEvent(event: string) {
        console.log(`Listener [${this.listenerName}]
        received event: ${event}
        `);
    }
    public unregister() {
        this.eventSubscription.unsubscribe();
    }
}