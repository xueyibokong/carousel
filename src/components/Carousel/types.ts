export type carouselPropsDTO = {
    list?: listDTO,
    overDuration?: number,
    animatDuration?: number
}
export type listDTO = itemDTO[];
export type itemDTO = {
    /**
     * 一级标题
     */
    title?: string,
    /**
     * 描述
     */
    dis?: string,
    /**
     * 背景图
     */
    img?: string,
    /**
     * 背景色
     */
    bgColor?: string,
    /**
     * 字体颜色
     */
    color?: string,
    /**
     * 跳转链接
     */
    jumpUrl?: string
};