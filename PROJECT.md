# npm 发布
### 添加npm 过滤文件
.npmignore
```
/.git/
/.vscode/
/node_modules/
/images/
/src/
/test/
/server/
.gitignore
.npmignore
.prettierrc
.editorconfig
tslint.json
tsconfig.json
note.md
PROJECT.md
*.log
```
只保留 ./lib 目录
# tsc 编译项目
### .tsconfig 修改
```
{
  "compilerOptions": {
    .....
    "outDir": "./lib",                        /* Redirect output structure to the directory. */
    .....
  },
  "include": ["./src"],
  "exclude": ["/node_modules"],
}

### 在./lib 目录添加 koa-ioc.d.ts 文件
导出相关的接口
```
declare function ioc_dir(path: string): any;
```

```
# 编写 README.md 文件 
# npm 包发布
package.json
- 检查关联的包
- 修改git 地址

### npm login
### npm publsh