#!/bin/bash
filesChanged=./dist/*
if [ ${#filesChanged[@]} -eq 0 ]; then
    echo "No files to update"
else
    for f in $filesChanged
	do
		#do not upload these files that aren't necessary to the site
		if [ "$f" != ".travis.yml" ] && [ "$f" != "deploy.sh" ] && [ "$f" != "package.json" ]
		then
	 		echo "Uploading $f"
	 		curl --ftp-create-dirs -T $f -u $FTP_USER:$FTP_PASS ftp://fagrano.beget.tech/paradise-studio.com.ua/public_html/todo/$f
		fi
	done
fi
