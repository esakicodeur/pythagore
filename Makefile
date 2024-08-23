deploy:
	ssh o2switch 'cd ~/sites/chat.academiedeselites.com && git pull origin main && make install'

install: .env public/build/manifest.json

.env:
	cp .env .env

public/build/manifest.json: package.json
	npm i
	npm run build
