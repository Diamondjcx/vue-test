# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### 测试功能

#### css3 新特性

1. 垂直居中对齐

```css
text-align: center;
align-content: center;
```

#### 语言切换 中英文切换

1. vue-i18n

#### vue 通信

1. 父子/多级 inject
2. 父子双向绑定 model
3. 父子 props
4. 父子 ref

#### vue3 新特性

1. 同名简写
2. 一次性侦听器
3. 响应式 Props 解构
4. useTemplateRef()获取模板引用实例

#### 组件继承

#### tailwindcss 测试

#### codeEditorView 代码编辑器测试

vue-codemirror

#### upload 测试

上传 zip 压缩包，并将压缩包的内容进行解析读取
上传格式拦截

#### grid 测试

```css
 {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  -webkit-box-pack: justify;
  justify-content: space-between;
  column-gap: 16px;
  row-gap: 16px;
}
在网格容器中，自动填充尽可能多的列，每列的宽度最小为 230px，最大为剩余空间的等分（1fr）。
```

假设有一个宽度为 1000px 的网格容器：

每列的最小宽度是 230px，所以最多可以容纳 4 列（因为 230px \* 4 = 920px，小于 1000px）。

剩余的 80px 会平均分配给这 4 列，每列的实际宽度为 230px + 20px = 250px。

如果容器的宽度变为 700px：

只能容纳 3 列（230px \* 3 = 690px）。

剩余的 10px 会平均分配给这 3 列，每列的实际宽度为 230px + 3.33px ≈ 233.33px。

#### crypto 加密

对称加密，加解密用一个密钥

#### file 文件预览

doc
excel
csv

#### request 请求

发起请求
取消最近的一次请求
取消所有的请求

token 过期之后，页面请求已发送，返回错误并弹窗；
将所有的请求都加入到一个队列当中，当检测到接口返回 401 时，取消正在发送的请求，并将状态改为成功的状态

#### pdf 预览/下载

将页面转化成 pdf 预览 预览下载

# 蓝军上尉人员统计样例表

| 序号 | 所属军种           | 性别 | 军衔 |
| ---- | ------------------ | ---- | ---- |
| 1    | 蓝军陆军第一师     | 男   | 上尉 |
| 2    | 蓝军海军陆战队     | 男   | 上尉 |
| 3    | 蓝军空军侦察旅     | 女   | 上尉 |
| 4    | 蓝军火箭军战略营   | 男   | 上尉 |
| 5    | 蓝军网络战分队     | 女   | 上尉 |
| 6    | 蓝军陆军第三师     | 男   | 上尉 |
| 7    | 蓝军海军驱逐舰支队 | 男   | 上尉 |

## 统计汇总

- **总人数**：7 人
- **军种分布**：
  - 陆军：2 人
  - 海军：2 人
  - 空军：1 人
  - 火箭军：1 人
  - 网络战：1 人
- **性别比例**：
  - 男性：5 人（71.4%）
  - 女性：2 人（28.6%）

> 如需调整格式或补充字段（如年龄、服役年限等），可随时告知！

- <a href="javascript:void(0);" @click="handleClick">张鑫明</a>

1. 张三
2. 李四
