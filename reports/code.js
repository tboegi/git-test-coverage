function toggleCommit(commit)
{
	var rows = document.getElementsByTagName("tr");

	var  il = rows.length;
	for (var i = 0; i < il; i++)
	{
		if (rows[i].className == commit)
		{
			if (rows[i].style.background == 'rgb(200, 255, 255)')
			{
				rows[i].style.background = "#fff";
			}
			else
			{
				rows[i].style.background = 'rgb(200, 255, 255)';
			}
		}
	}
}

function toggleIgnored()
{
	var rows = document.getElementsByTagName("tr");

	var  il = rows.length;
	for (var i = 0; i < il; i++)
	{
		if (rows[i].className == "ignored-hidden")
		{
			rows[i].className = "ignored-visible";
		}
		else if (rows[i].className == "ignored-visible")
		{
			rows[i].className = "ignored-hidden";
		}
	}
}