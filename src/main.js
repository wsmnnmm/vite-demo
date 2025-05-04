import "./style.css";
import { setupCounter } from "./counter.js";
import { getTimeMessage, incrementCount } from "./hmrDemo.js";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Vite 核心原理实践</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card">
      <button id="dynamic-import" type="button">动态导入模块</button>
      <div id="dynamic-result"></div>
    </div>
    <div class="card">
      <button id="dependency-demo" type="button">依赖处理演示</button>
      <div id="dependency-result"></div>
    </div>
    <div class="card">
      <button id="hmr-demo" type="button">热更新演示</button>
      <div id="hmr-result"></div>
    </div>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// 添加动态导入按钮事件
document
  .querySelector("#dynamic-import")
  .addEventListener("click", async () => {
    // 使用动态导入 - 这是 Vite 按需编译的核心体现
    const module = await import("./dynamicModule.js");
    document.querySelector("#dynamic-result").textContent =
      module.showMessage();

    // 在控制台查看网络请求，可以看到这个模块是在点击后才加载的
    console.log("模块已动态加载");
  });

// 添加依赖演示按钮事件
document
  .querySelector("#dependency-demo")
  .addEventListener("click", async () => {
    // 动态导入依赖演示模块
    const { demonstrateDependency } = await import("./dependencyDemo.js");
    const demo = demonstrateDependency();

    // 显示计数结果
    const resultElement = document.querySelector("#dependency-result");
    resultElement.textContent = `计数: ${demo.increment()}`;

    // 在控制台查看网络请求，观察 node_modules 中的依赖是如何被加载的
    console.log("依赖模块已加载，请在网络面板中观察");
  });

//添加热更新演示按钮事件;
document.querySelector("#hmr-demo").addEventListener("click", () => {
  const data = getTimeMessage();
  // 手动点击时也递增计数
  data.count = incrementCount();
  document.querySelector(
    "#hmr-result"
  ).textContent = `${data.message} (更新于 ${data.time}, 热更新次数: ${data.count})`;
});
