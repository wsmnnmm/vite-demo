// 这个文件用于演示 Vite 的热更新机制

// 导出一个简单的函数，返回当前时间和一个消息
export function getTimeMessage() {
  return {
    time: new Date().toLocaleTimeString(),
    message: "这是初始消息 - 尝试修改这行文本并保存，观察热更新效果！wsmnnmm",
    count: 0,
  };
}

// 添加热更新处理
if (import.meta.hot) {
  // 保存状态的计数器
  let count = 0;

  // 当模块热更新时
  import.meta.hot.accept((newModule) => {
    console.log("hmrDemo.js 模块已热更新");
    count++;

    // 调用新模块的函数，但保留状态计数
    const data = newModule.getTimeMessage();
    data.count = count;

    // 更新 UI
    const resultElement = document.querySelector("#hmr-result");
    if (resultElement) {
      resultElement.textContent = `${data.message} (更新于 ${data.time}, 热更新次数: ${data.count})`;
    }
  });
}
