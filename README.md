# Panel switcher

Panel switcher is a little plugin for cycling the visibility of children elements inside a container to a specified interval of time.

The reason I made it was so that I could switch the panels of a webcomic to the beat of a accompanying song.

# Setup

First you'll need to write up your HTML. Here's an example:

```html
<div class="switch" data-beat-length="1">
	<img data-beat-length="3" src="1.png"/>
	<img src="2.png"/>
	<img data-beat-length="0.125" src="3.png"/>
	<img src="4.png"/>
<div>
```

So we have a div that we're going to pass along to panel-switcher, containing the four elements we'd like to switch between.

The container has an attribute `data-beat-length` which you use to specify the number of beats you'd like its children to be visible for by default. `data-beat-length` accepts floats, so you can be as specific as you like.

You can also change the `data-beat-length` attribute of the children elements to override this setting, so you can assign different time intervals to each child element.

Once you've got this written and the plugin linked to on your webpage, you can run panel-switcher in one line:

```javascript
$(document).ready(function() {
	$('.switch').panelSwitcher({beat: 517});
});
```
You can pass a `beat` option as a number of milliseconds to specify how long a beat is. It defaults to 500, or 120bpm.

And that's it.