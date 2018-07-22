dev:
	npm run dev

pro:
	npm run build
	rm -rf ../ws-html/*
	cp -rf dist/* ../ws-html