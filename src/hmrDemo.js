// 这个文件用于演示 Vite 的热更新机制

// 从 localStorage 获取计数器，如果不存在则初始化为 0
export function getHmrCount() {
  return parseInt(localStorage.getItem("hmrDemoCount") || "0");
}

// 导出一个简单的函数，返回当前时间和一个消息
export function getTimeMessage() {
  return {
    time: new Date().toLocaleTimeString(),
    message:
      "这是初始消息 - 尝试修改这行文本并保存，观察热更新效果!!!!!!!wsmnnmm",
    count: getHmrCount(), // 使用从 localStorage 获取的计数
  };
}

// 导出递增计数的函数
export function incrementCount() {
  let newCount = getHmrCount() + 1;
  localStorage.setItem("hmrDemoCount", newCount.toString());
  return newCount;
}

// 添加热更新处理
if (import.meta.hot) {
  // 当模块热更新时
  import.meta.hot.accept((newModule) => {
    console.log("hmrDemo.js 模块已热更新，计数：", getHmrCount());

    // 创建新的数据对象
    const data = {
      time: new Date().toLocaleTimeString(),
      message: newModule.getTimeMessage().message,
      count: incrementCount(),
    };

    // 更新 UI
    const resultElement = document.querySelector("#hmr-result");
    if (resultElement) {
      resultElement.textContent = `${data.message} (更新于 ${data.time}, 热更新次数: ${data.count})`;
    }
  });
}
