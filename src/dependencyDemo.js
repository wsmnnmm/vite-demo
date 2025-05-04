// 这个文件演示 Vite 如何处理 node_modules 中的依赖

// 导入一个第三方库（假设已安装）
import { reactive } from "vue";

export function demonstrateDependency() {
  // 使用 Vue 的 reactive API
  const state = reactive({ count: 0 });

  // 返回一个可响应的状态对象
  return {
    state,
    increment() {
      state.count++;
      return state.count;
    },
  };
}
