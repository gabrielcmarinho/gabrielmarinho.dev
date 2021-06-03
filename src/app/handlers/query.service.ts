import { Observable, throwError } from 'rxjs';

import { IQuery } from "@app/handlers/query.interface";

export class QueriesHandlerService {
  handle<T>(query: IQuery<T>): Observable<T[] | T> {
    if (!query.isValid()) {
      return throwError({
        errorCode: 400,
        errorMessage: 'Invalid parameters.',
      });
    }

    return query.execute(this);
  }
}
