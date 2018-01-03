function vmeGetBrowser()
{
	var ua, s, i;

	this.isIE = false;
	this.isNS = false;
	this.version = null;

	ua = navigator.userAgent;

	s = "MSIE";
	if( ( i = ua.indexOf(s)) >= 0 )
	{
		this.isIE = true;
		this.version = parseFloat(ua.substr(i + s.length));
		return;
	}

	s = "Netscape6/";
	if( ( i = ua.indexOf(s)) >= 0 )
	{
		this.isNS = true;
		this.version = parseFloat(ua.substr(i + s.length));
		return;
	}

	// Treat any other "Gecko" browser as NS 6.1.
	s = "Gecko";
	if( ( i = ua.indexOf(s)) >= 0 )
	{
		this.isNS = true;
		this.version = 6.1;
		return;
	}
}
var vmeBrowser = new vmeGetBrowser();
function vmeGetMovie( movieName )
{
	var movie = null;
	if( vmeBrowser.isIE )
	{
		movie = window[ movieName ];
	}
	if( movie == null )
	{
		movie = document[ movieName ];
	}
	if( ( movie != null ) && ( movie.length == 2 ) )
	{
		// IE9 returns an array instead of just the object
		movie = movie[ 0 ];
	}
	return movie;
}