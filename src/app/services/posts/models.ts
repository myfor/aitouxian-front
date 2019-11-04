/**
 * 内容模型
 */
export class Content {
    /**
     * @param id ID
     * @param author 作者
     * @param type 内容类型
     * @param description 描述
     * @param currentPath 当前显示的路径
     * @param thumbnailPath 缩略图
     * @param sourceFilePath 文件
     * @param publishDateTime 发布时间
     * @param likes 点赞数
     */
    constructor(
        public id: number,
        public author: string,
        public description: string,
        public type: number,
        public currentPath: string,
        public thumbnailPath: string,
        public sourceFilePath: string,
        public publishDateTime: string,
        public likes: number
    ) {}
}

/**
 *  获取帖子列表 参数
 */
export class RequestContentsParams {
    constructor(
        public index: number,
        public rows: number,
        public order: number
    ) { }
}

/**
 *  发布新帖 参数
 */
export class NewPostParams {
    constructor(
        public author: string,
        public description: string,
        public file: any
    ) {}
}

/**
 * 排序的枚举
 */
export enum PostOrder {
  /**
   * 随机排序
   */
  Random = 0,
  /**
   * 最新顺序排序
   */
  Newest = 1,
}

/**
 * 内容类型
 */
export enum ContentType {
    /**
     * 静态图片
     */
    Image = 0,
    /**
     * 动态图片
     */
    GIF,
    /**
     * 视频
     */
    Vedio,
}
