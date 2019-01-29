{
	"heading": "<h1>This is a refactor of a CODEPEN: <a href='https://codepen.io/StrengthandFreedom/pen/zEbwpM/?editors=0010' target='_blank'>Get Viewport Dimensions Version 2 (complete)</a> by <a href='https://codepen.io/StrengthandFreedom/' target='_blank'>David</a></h1><h2>The original article is: <a href='https://techstacker.com/building-a-get-viewport-dimensions-app-with-vanilla/ttDuoXKkNyx6Yqz5X' target='_blank'>Building a “Get Viewport Dimensions” App with Vanilla JavaScript</a> by <a href='https://techstacker.com/users/show/u/david' target='_blank'>David at TechStacker</a>.</h2>",
	"content": "<p>This was an outstanding script and post. I especially appreciated how David (the contributor) walks the reader step-by-step in very clear language. First with just the minimum basics to get the script running then an optimized version which gives us a first taste (if you're a novice) of functional programming with throttling decorators for running asynchronous calls. There was nothing wrong with the script from my point of view but I refactored it to add functionality and style. I also prefer wrapping larger chunks of code into smaller ones. This leads me to create many more functions and objects for easier maintenance and self-commenting. The refactored script reflects this.</p> <p>Added functionality are names of device targets which can easily be modified or expanded by editing the <code>getTarget</code> function. This can be removed by editing the <code>getData</code> and <code>setData</code> functions. Shell container styles can be edited by modifying <code>#viewportdata</code>, <code>#dims</code>, and <code>#target</code> in the CSS file</p> <p>Other added functionality is the ability to stop the script by clicking once on the dims when they display. It works by wrapping the dims and target subcontainers (shell in the Javascript) with an anchor tag (displayed as a block) and adding a very basic <code>onclick</code> event that calls a function <code>endTask</code>. That function uses <code>removeEventListener</code> to remove the <code>addEventListener</code> that invokes <code>throttleSetView</code>.</p> <p>Everything in header and below is just an HTML template used to demonstrate how this script might perform in a populated web page.</p>"
}
