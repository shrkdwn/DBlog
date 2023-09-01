import CopyHtmlMenu from './CopyHtmlMenu'
import FormatPaint from './formatPaint'
import {
  IDomEditor,
  IToolbarConfig,
  Boot,
  IModuleConf,
} from '@wangeditor/editor'

const MenusList = [
  {
    key: 'FormatPaint',
    class: FormatPaint,
    index: 5, // 菜单要在工具栏显示的位置
  },
  {
    key: 'CopyHtmlMenu',
    class: CopyHtmlMenu,
    index: 32, // 菜单要在工具栏显示的位置
  },
]
const registerMenu = function (
  editor: IDomEditor,
  toolbarConfig: Partial<IToolbarConfig>
) {
  const allRegisterMenu = editor.getAllMenuKeys() // 获取所有已注册的菜单
  let keys = []
  for (let item of MenusList) {
    if (allRegisterMenu.indexOf(item.key) < 0) {
      // 如果未注册，则注册
      const menuObj = {
        key: item.key,
        factory() {
          return new item.class()
        },
      }
      Boot.registerMenu(menuObj)
    }
    keys.push(item.key)
  }
  // 目前wangEditor,多个自定义工具只支持插入同一个位置
  toolbarConfig.insertKeys = {
    index: 32,
    keys: keys,
  }
}

export default registerMenu
