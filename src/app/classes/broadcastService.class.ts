import { Subject } from "rxjs";
import { Observable } from 'rxjs';
import { filter, map } from "rxjs/operators";

import { IBroadcastEvent, EventKeys} from '../interfaces/busEvents.interface';

export class BroadcastService {
    private _eventBus = new Subject<IBroadcastEvent>();

    on(key: EventKeys): Observable<string> {
        return this._eventBus.asObservable().pipe(
            filter(event => event.key === key || event.key === EventKeys.ALL),
            map(event => event.data)
            )
    }

    broadcast(key: EventKeys, data: string) {
        this._eventBus.next({key, data})
    }
}