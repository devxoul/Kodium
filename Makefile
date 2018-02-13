all: chrome

clean:
	rm -rf build

define build
	mkdir build
	cp -R templates/$(1) build/$(1)
	cp scripts/kodium.js build/$(1)/app.js
	zip -0 -r build/$(1).zip build/$(1) -x *.DS_Store*
endef

chrome: clean
	$(call build,chrome)
