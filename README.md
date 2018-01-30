# lambda-binaries
Popular binaries packaged for use in AWS Lambda. Just edit the code and deploy the function

# Getting started
1. Clone the repo.
2. Run ```npm install``` in the directory of the project that you'd like to
   run on AWS Lambda.
3. Edit the code then zip and deploy it to AWS. 

# Packages Available
1. Tesseract
2. PhantomJS (coming soon)
3. Git (coming soon)

Open an issue to let us know what package you'd want us to list next.
Open a PR if you have package you want to submit.

# Want to get started right away and not mess with AWS Lambda settings and permissions? Use Clay.

Try Tesseract from Clay's UI. Press quick run to see a demo against a
hard coded image URL or pass in any image url in the UI. You can call
the function by making an HTTP Post call to the Clay Function URL.
If you want to modify the code, simply fork the function and edit and
deploy:

1. Tesseract: https://www.clay.run/services/kareem/tesseract-ocr-image-bundle


We'll be adding Clay functions for each package that we add. Feel free
to contribute your own binary package or Clay function to this list.
