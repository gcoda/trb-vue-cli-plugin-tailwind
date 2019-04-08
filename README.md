# Opinionated Vue cli plugin adds tailwind with plugins

You should probably use [@ky-is/tailwind](https://github.com/ky-is/vue-cli-plugin-tailwind) instead of this.

### here is the difference: 

#### keep tailwind stuff in `./src/tailwind` dir

#### importing `tailwind.css` in `main.js` 

Scoped styles can be used in App.vue

#### postcss-import

default `@import` maked styles global if used in <style scoped>,
using `postcss-import` in `postcss.config.js` fixes it.

#### tailwind plugins

##### Grid

.grid
.grid-columns-{size}
.col-span-{columns}
.grid-gap-{size}

##### Table

.table tr th td

##### Colors

Generating shades from one base color by taking thousands of small steps until desired WCAG Luminosity is reached.

## 

`vue add @therobot/tailwind`