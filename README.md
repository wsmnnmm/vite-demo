# Vite 核心原理实践项目

这个仓库是用于学习和实践 Vite 前端构建工具的核心原理的演示项目。

## 项目概述

本项目旨在通过实际代码演示来理解 Vite 的两大核心原理：

1. 利用浏览器原生 ES 模块导入（ESM）
2. 采用即时编译（按需编译）而非提前打包

## 主要功能演示

- **动态导入模块**：展示 Vite 如何实现按需加载
- **依赖处理机制**：演示 Vite 如何处理 node_modules 中的依赖
- **热更新机制**：展示 Vite 的热更新工作原理及状态保留

## 技术要点

- Vite 预构建依赖（使用 esbuild）
- 路径重写与请求拦截
- 基于 WebSocket 的热更新
- ESM 模块化开发

## 如何使用

1. 克隆仓库

```bash
git clone <仓库URL>
cd vite-demo
```
