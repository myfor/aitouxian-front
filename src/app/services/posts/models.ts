/**
 * 内容模型
 */
export class Content
{
    /**
     * @param author 作者
     * @param content 内容类型
     * @param content 内容
     * @param dateTime 发布时间
     * @param like 点赞数
     */
    constructor(
        public author: string,
        public type: number,
        public content: string,
        public dateTime: string,
        public like: number
    ){}
}