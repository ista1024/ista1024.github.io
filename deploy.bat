cd ../ista1024.github.io-deploy
del /q * && rd /s /q _next
cd ../ista1024.github.io
robocopy .\out ..\ista1024.github.io-deploy /E /MOVE
cd ../ista1024.github.io
