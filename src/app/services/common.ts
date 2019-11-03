import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class ServicesBase {
    static handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.');
    }
}

/**
 * 返回数据类型
 */
export class Result<T= any> {
    constructor(
        public message: string,
        public data: T
    ) {}
}

export class Paginator<T = any> {
    constructor(
        public index: number,
        public rows: number,
        public totalRows: number,
        public totalPages: number,
        public list: T[]
    ) {}
}
