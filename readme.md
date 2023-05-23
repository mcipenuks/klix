# Repository overview

`/klix-widget` - Source code of the widget

`/klix-demo` - Simple demo app built on vue which embeds the widget

# Development server setup
You can setup the project either with docker or manually

## Docker setup
```
docker-compose up
```

Widget server: http://localhost:8888

Demo app server: http://localhost:5173
## Manual setup

### Widget setup
```bash
cd klix-widget
npm install
npm run start
```

### Demo page setup
```bash
cd klix-demo
npm install
npm run dev
```
