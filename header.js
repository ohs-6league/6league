var contents = `
<header>
	<div class="hamburger-menu">
		<div class="rel">
			<a href="index.html"><img src="img/logo.png" class="logo"></a>
		</div>
		<input type="checkbox" id="menu-btn-check">
		<label for="menu-btn-check" class="menu-btn"><span></span></label>
		<ul class="ul_top">
			<li><a href="index.html" ontouchstart="">TOP</a></li>
			<li><a href="rules.html" ontouchstart="">RULES</a></li>
			<li><a href="rank.html" ontouchstart="">RANKING</a></li>
			<li><a href="yourscore.html" ontouchstart="">YOUR INFO</a></li>
			<li><a href="entry.html" ontouchstart="">ENTRY</a></li>
			<li><a href="https://twitter.com/ohs_6league" ontouchstart="">TWITTER</a></li>
		</ul>
	</div>
</header>
`
document.write(contents);