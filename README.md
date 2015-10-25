# SeedChromeApp
A minimum configuration for chrome app.

## Chromeのパスを指定
Mac OS Xのデフォルト以外の場所にChromeをインストールした場合は、ディレクトリのパスを指定する必要があります。
bin/launch_chrome_app.pyの`PATH_CHROME`を変更して保存してください。
デフォルトのパスは
```python
# Mac OS X のデフォルト:
PATH_CHROME = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
```
となっています。

## 実行
wwwディレクトリの内容をChrome Appとして起動します。
```
$ chmod u+x seedChromeApp
$ ./seedChromeApp
```
または
```
$ sh seedChromeApp
```
