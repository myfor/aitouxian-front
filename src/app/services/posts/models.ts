/**
 * 内容模型
 */
export class Content
{
    /**
     * @param id ID
     * @param author 作者
     * @param type 内容类型
     * @param content 内容
     * @param dateTime 发布时间
     * @param like 点赞数
     */
    constructor(
        public id: number,
        public author: string,
        public type: number,
        public content: string,
        public dateTime: string,
        public likes: number
    ){}
}

export class RequestContentsParams {
    constructor(
        public index: number,
        public rows: number,
        public order: number
    ) { }
}