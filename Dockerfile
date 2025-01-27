# 使用官方 Node.js 鏡像
FROM node:18-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 yarn.lock
COPY package.json yarn.lock ./

# 安裝依賴
RUN yarn install --frozen-lockfile

# 複製專案檔案
COPY . .

# 編譯 React 專案
RUN yarn build

# 使用 Nginx 部署靜態文件
FROM nginx:alpine

# 複製編譯後的靜態文件到 Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# 配置 Nginx（可選）
COPY default.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
