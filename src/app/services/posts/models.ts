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
        public file: string,
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

/**
 * 排序的枚举
 */
export enum PostOrder
{
  /**
   * 最新顺序排序
   */
  Newest = 1,
  /**
   * 随机排序
   */
  Random
}

/**
 * 内容类型
 */
export enum ContentType
{
    /**
     * 静态图片
     */
    Image = 0,
    /**
     * 动态图片
     */
    GIF
}