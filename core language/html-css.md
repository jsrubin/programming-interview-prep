# HTML/CSS Interview Questions

## HTML

### What is the use of iframe tag? What are some advantages/disadvantages of using?

- An iframe is used to display a web page within a web page.
<iframe src="URL"></iframe>

---

### What is HTML5 Web Storage? Explain localStorage and sessionStorage?

- store data locally within the user’s browser, storage limit (5MB), scoped to the document origin
- localStorage: permanent, does not expire
- SessionStorage: lifetime as the top-level window or browser tab, scoped on a per-window basis

### How do you clear localStorage?

- localStorage.clear()

---

### What is the difference between span and div?

- **span** gives the output with display: **inline**, elements to be shown in a line, one after the other
- **div** gives the output with display: **block**

---

### What is SVG?

- HTML SVG is used to describe the two dimensional vector and vector/raster graphics.
  <svg width="100" height="100">  
   <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="red" />  
  </svg>

### Have you used any charting libraries like D3JS or Highcharts? How would you create a circle using SVG and D3?

- make SVG container `append('svg')` with width and height
- draw a circle `append('circle')` with x, y and radius
  <svg width="50" height="50">
  <circle cx="25" cy="25" r="25" fill="purple" />
  </svg>

---

## CSS

### What is the "Box Model" in CSS? What are the CSS properties of a "box"?

- every element in web design is represented as a rectangular box
- width, height, padding, border

---

### What are the elements of the CSS box model?

- **border** The border surrounding the padding.
- **content** Any text or images within the box.
- **margin** The transparent area surrounding borders.
- **padding** The transparent area surrounding content.

---

### What are the position properties in used for elements? Can you talk to how they differ?

- **Static** default position, always positioned according to the normal flow of the page, top, right, bottom, and left properties do not affect
- **Relative** relative to its normal position, top, right, bottom, and left properties cause it to be adjusted
- **Absolute** positioned relative to the nearest positioned ancestor, have no width, width is only as wide as it needs to be to hold the content
- **Fixed** positioned relative to the viewport, always stays in the same place even if the page is scrolled
- **Sticky** positioned based on the user's scroll position, toggles between relative and fixed, relative until a given offset then 'sticks'
- Floated elements: only as wide as it needs, up to as wide as its parent

---

### What is a CSS preprocessor? Why do people use them?

- Sass, LESS, and Stylus
- an abstraction layer on top of CSS, special syntax/language that compile down into CSS
- features like variables, inheritable “classes” called extends, and “function-like” mixins

---

### What is the different between CSS length `em` and `px`?

- **em** a relative unit of measurement based on the height/size of a font
- **px** a device-specific relative measurement equivalent to a certain number of pixels on a display

---

### What are three ways to add CSS to a webpage? What are advantages and disadvantages of each?

- **inline** written directly into the HTML elements as a style attribute; adv: override; disadv: maintainability
- **embedded** written within the `<style>` tags inside the `<head>`; adv: loading with the HTML, no extra download; disadv: external HTML will not inherit styles
- **external style sheet** separate file, easy still entire site, allows complex styling through classes, selectors; disadv: must be downloaded

---

### What is the difference between `visibility:hidden;` and `display:none;`?

- `Visibility:Hidden`: not visible but takes up it's original space
- `Display:None`: hidden and takes up absolutely no space

---

### What is a child selector?

- style that only applies to the child ex. `body > p`

---

### What is an attribute selector?

- selection based on attribute of element `input[type = "text"]`

---

### What is Critical (Rendering) Path? Why is it important? Talk to the steps within the path.

- optimize the time to first render

1. Process HTML markup and build the DOM tree.
2. Process CSS markup and build the CSSOM tree.
3. Browser combines the DOM and CSSOM into a Render tree.
4. Layout, browser calculates the size and position of each visible element on the page
5. Paint the pixels/individual nodes to the screen.

---

### What are render blocking resources of Critical (Rendering) Path?

- both HTML and CSS are render blocking resources
- Javascript is parser blocking
- The initial file size of your DOM tree will have a performance cost

### What are some of the `media` type Style Sheets?

- all, orientation:portrait, print

### Which of the following are render blocking?

```
<link href="style.css"    rel="stylesheet">
<link href="style.css"    rel="stylesheet" media="all">
<link href="portrait.css" rel="stylesheet" media="orientation:portrait">
<link href="print.css"    rel="stylesheet" media="print">
```
