/**
 * 返回数据类型
 */
export class Result<T>
{
    constructor(
        public message: string,
        public data: T
    ) {}
}

export class Paginator
{
    constructor(
        public index: number,
        public rows: number,
        public totalRows: number,
        public totalPages: number,
        public list: []
    ) {}
}