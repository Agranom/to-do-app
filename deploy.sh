#!/bin/bash
filesChanged="./dist/*"
echo $filesChanged
if [ ${#filesChanged[@]} -eq 0 ]; then
    echo "No files to update"
else
    for f in $filesChanged
	do
		if [ "$f" == "./dist/index.html" ]
		then
			sed -i 's/<base href=\"\/\">/<base href=\"\/todo\/\">/g' $f
		fi
		#do not upload these files that aren't necessary to the site
		if [ "$f" != ".travis.yml" ] && [ "$f" != "deploy.sh" ] && [ "$f" != "package.json" ]
		then
	 		echo "Uploading $f"
	 		a="$f"|tail -c +8
	 		curl --ftp-create-dirs -T $f -u $FTP_USER:$FTP_PASSWORD ftp://fagrano.beget.tech/$a
		fi
	done
fi
