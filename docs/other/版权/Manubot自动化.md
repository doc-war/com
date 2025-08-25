# **Manubot** 将md论文自动生成稿件



你已经有用 Markdown 写好的论文，目标是：

> ✅ 使用 **Manubot** 工具链
>  ✅ 自动构建成符合 **ACM 期刊（如 TOIS、TWEB、CSUR 等）** 要求的 **PDF**
>  ✅ 用于正式投稿



投稿按格式编辑是一个反人类的现状，尤其放在反复修改-投稿的流程中。如果能根据md原文自动、持续自动生成期刊要求的PDF，那么只需要期刊方面提供模板文件即可。





下面是详细的配置流程为经验证：

------

## ✅ 第一步：准备 Manubot 项目结构

你可以从官方模板 fork 一份作为起点：

```
bash复制编辑npx degit manubot/rootstock my-paper
cd my-paper
```

然后将你的 `.md` 文件复制到 `content.md` 中（或拆分进 `content/` 子段落文件）。

------

## ✅ 第二步：设置 ACM 格式的引用样式（CSL）

1. 下载 ACM 引用样式文件：
    https://www.zotero.org/styles/acm-sig-proceedings
2. 重命名为 `style.csl`，放入 `content/` 目录。
3. 修改 `metadata.yaml`：

```
yaml


复制编辑
csl: style.csl
```

------

## ✅ 第三步：使用 Pandoc + ACM 官方 LaTeX 模板生成 PDF

由于 ACM 有自己的 `.cls` 模板（如 `acmart.cls`），我们需要让 Pandoc 使用它生成 PDF。

### ✅ 方法一：使用定制的 Pandoc LaTeX 模板（推荐）

1. 下载 ACM 官方模板：
   - GitHub: https://github.com/borisveytsman/acmart
   - 或从 ACM 官网下载 `.cls`, `.bst` 等文件
2. 构建一个 Pandoc LaTeX 模板 `acm-template.tex`，类似这样：

```
latex复制编辑\documentclass[sigconf]{acmart}  % 或根据具体 ACM 栏目修改
\title{$title$}
\author{$for(author)$$author.name$$sep$ \and $endfor$}
\begin{document}
\maketitle
$body$
\bibliographystyle{ACM-Reference-Format}
\bibliography{references}
\end{document}
```

1. 将该模板放入项目目录，并在构建脚本中使用：

```
bash复制编辑pandoc content.md \
  --metadata-file=metadata.yaml \
  --template=acm-template.tex \
  --csl=content/style.csl \
  --pdf-engine=pdflatex \
  -o output.pdf
```

------

## ✅ 第四步：自动化构建（CI 支持）

你可以在 `.github/workflows/build.yaml` 添加：

```
yaml复制编辑jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: |
          sudo apt-get update
          sudo apt-get install pandoc texlive-latex-recommended texlive-fonts-recommended texlive-latex-extra
      - name: Generate PDF
        run: |
          pandoc content.md \
            --metadata-file=metadata.yaml \
            --template=acm-template.tex \
            --csl=content/style.csl \
            --pdf-engine=pdflatex \
            -o output.pdf
```

这样每次 push 都会自动生成最新的 PDF。

------

## ✅ 第五步：本地测试命令

如果你不想用 GitHub Actions，也可以在本地运行：

```
bash复制编辑make             # 如果你使用 Makefile
# 或者直接
pandoc content.md \
  --metadata-file=metadata.yaml \
  --template=acm-template.tex \
  --csl=content/style.csl \
  --pdf-engine=pdflatex \
  -o output.pdf
```