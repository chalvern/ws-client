dev:
	npm run dev

pro:
	npm run build
	rm -rf ../ws-html/*
	cp -rf dist/* ../ws-html
	cd ../ws-html && git add . && git commit -m "update" && git push