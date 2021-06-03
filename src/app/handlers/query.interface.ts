import { Observable } from 'rxjs';

import { QueriesHandlerService } from "@app/handlers/query.service";

export interface IQuery<T> {
    isValid(): boolean;
    execute(handler: QueriesHandlerService): Observable<T[] | T>;
}