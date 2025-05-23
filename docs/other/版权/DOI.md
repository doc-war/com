# DOI



**DOI（Digital Object Identifier，数字对象唯一标识符）** 是一种用于标识数字内容（如论文、图书、数据集、视频等）的标准化永久链接。它由国际 DOI 基金会（IDF）负责管理和维护。

每篇发表在主流学术平台上的文章通常都会分配一个 DOI，以用于引用和追踪。主要用于图书章节、数据集、报告、多媒体资源

## DOI 的结构

DOI 采用以下格式：

```markdown
DOI: 10.<注册机构代码>/<资源标识符>
```

比如：`DOI: 10.1000/xyz123`

- `10`→ 固定的 DOI 前缀，标识 DOI 体系。
- `1000`→ 注册机构代码，由 IDF 分配给 DOI 注册机构的唯一编号
- `xyz123` → 资源标识符，由内容发布者或机构定义，用于标识具体资源。

## DOI链接

DOI是逻辑地址，唯一、不变。

DOI 通过 `https://doi.org/` 进行中心化路由解析，用户只需在浏览器中输入 DOI 链接，即可到解析系统查找 元数据和目标 URL，重定向到相应内容页面。

```markdown
https://doi.org/10.1000/xyz123
```

## 怎么注册DOI

内容发布者通过 DOI 注册机构申请 DOI。注册机构会将 DOI 与具体资源的 URL 进行关联，并存储在 DOI 解析系统中。

常见注册机构：

- [CrossRef](https://www.crossref.org/)
- [DataCite](https://datacite.org/)
- [mEDRA](https://www.medra.org/)
- [Airiti](https://www.airiti.com/)

个人无法直接申请 DOI，通常需要通过出版机构或研究数据平台申请

## 怎么引用

如果没有作者、出版年、文章标题等信息，读者必须通过 DOI 链接去访问原文并查找这些细节，会增加查找文献的复杂度。因此，`学术严谨性`、`重视程度`、`尊重他人成果`的表达，要求遵循标准的引用格式。许多学术期刊和会议都有严格的引用格式要求。如果你只提供 DOI 链接，而没有遵循期刊要求的引用格式，你的稿件可能会被退回或拒绝

互联网领域几种主流的引用格式：

* **IEEE格式**：[编号] 作者, "文章标题," 期刊名, 卷号, 期号, 页码, 出版年份. DOI: xxxx/xxx

* **ACM格式**：作者, "文章标题," 期刊名或会议名, 卷号, 期号, 页码, 出版年份. DOI: xxx/xxx.
* **APA格式**：作者(s). (出版年份). 文章标题. 期刊名, 卷号(期号), 页码. https://doi.org/xx.xxx/xxxx





### DOI搜索平台对比表

| 平台名称           | 搜索网址                     | 特点说明                                                     |
| ------------------ | ---------------------------- | ------------------------------------------------------------ |
| **DOI.org**        | https://www.doi.org/         | 🔹 仅支持**已知 DOI 查询**（解析跳转） <br />🔹 不支持关键字搜索或元数据搜索 |
| **Crossref**       | https://search.crossref.org/ | 🔹 支持**关键字模糊搜索** <br />🔹 可搜索标题、作者、期刊等 <br />🔹 覆盖学术出版广泛（期刊、会议） |
| **DataCite**       | https://search.datacite.org/ | 🔹 专注**研究数据集** <br />🔹 支持结构化过滤搜索：类型、出版者、时间等 <br />🔹 支持关键词、作者、机构筛选 |
| **Europe PMC**     | https://europepmc.org/       | 🔹 集成 DOI、PubMed、PMC 数据 <br />🔹 强大全文和元数据搜索 <br />🔹 支持生物医学、生命科学领域 |
| **Google Scholar** | https://scholar.google.com/  | 🔹 泛学术搜索工具 <br />🔹 可间接找到 DOI（通常在链接中） <br />🔹 不保证结构化搜索精度 |
