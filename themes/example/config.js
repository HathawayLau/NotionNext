/**
 * 主题配置文件
 */
const CONFIG = {
  // 菜单配置
  EXAMPLE_MENU_CATEGORY: true, // 显示分类
  EXAMPLE_MENU_TAG: true, // 显示标签
  EXAMPLE_MENU_ARCHIVE: true, // 显示归档
  EXAMPLE_MENU_SEARCH: true, // 显示搜索
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, // 是否显示切换主题按钮
  EXAMPLE_POST_LIST_COVER: true // 列表显示文章封面

}
export default CONFIG
